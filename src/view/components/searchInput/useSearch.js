import { useEffect, useReducer } from 'react';

import axios from 'axios';
import { debounce } from 'throttle-debounce';

function reducer(state,action) {
  return {
    ...state,
    ...action,
  };
}

function useSearch() {
  const [state, setState] = useReducer(reducer, {
    subList: [],
    aptList: [],
    officeList: [],
    keyword: '',
    loading: false,
    total: 0,
    roomId: null,
  });
  const { keyword, total } = state;

  useEffect(() => {
    const debounce = setTimeout(() => {
      debounceFunc(keyword);
    },300);

    if (keyword === '') {
      setState({
        state
      });
    } else {
      setState({
        loading: true
      });
    }
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  const handleChange = e => {
    const { name,value } = e.currentTarget;
    setState({
      [name]: value,
      loading: true
    });
  };

  const debounceFunc = debounce(400, false, value  => {
    if (value !=='') {
      getList();
    }
  });

  async function getRoomById(seq) {
    try {
      const saleResponse = await axios.get('/api/3/room/get-room-id', {
        params: {
          api_version: '3.0.1',
          seq
        }
      });
      console.log(saleResponse.data.room_id);
      alert('매물창');
      setState({
        roomId: saleResponse.data.room_id
      });
    } catch(err) { 
      alert(err ?. ('매물 에러가 발생했습니다'));
      setState({
        loading: false
      });
    }
  }
  
  async function getList() {
    const url = '/api/3/loc/keyword';
    const keyword = state.keyword;
    const numberCheck = isNaN(keyword);
  
    try {
      const response = await axios.get(url, {
        params: {
          api_version: '3.0.1',
          keyword,
        }
      });
      const isEmpty = response.data.length <= 0;
      console.log(response);
      if (!numberCheck && total < isEmpty) {
        getRoomById(keyword);
      } else {
        setState({
          subList: response.data.filter(item => item.complex_type === null),
          aptList: response.data.filter(item => item.complex_type === 0),
          officeList: response.data.filter(item => item.complex_type === 1),
          total: response.data.length,
          loading: false,
        }); 
      }
    } catch(err) {
      console.log('error');
      alert(err ?.('방찾기 에러가 발생했습니다'));
      setState({
        loading: false,
      });
    }
  }
  
  return {
    state,
    handleChange,
  };
}

export default useSearch;
