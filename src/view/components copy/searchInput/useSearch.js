import { useEffect, useReducer, useState } from 'react';

import axios from 'axios';
import { debounce } from 'throttle-debounce';

function reducer(state,action) {
  return {
    ...state,
    ...action,
  };
}

const INIT = {
  subList: [],
  aptList: [],
  officeList: [],
  keyword: '',
  //렌더링 관련된거는 따로 관리하장,,! isLoading
  loading: false,
  total: 0,
};


function useSearch(setIsOpen) {
  // const [loading, setLoading] = useState(false);
  const [state, setState] = useReducer(reducer, INIT);
  const { keyword } = state;

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

  //changeKeword 어떤걸 바꿀 수 있는지 써주는게 좋음
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

  async function getList() {
    const url = '/api/3/loc/keyword';
    const keyword = state.keyword;
    try {
      const response = await axios.get(url, {
        params: {
          api_version: '3.0.1',
          keyword,
        }
      });
      setState({
        subList: response.data.filter(item => item.complex_type === null),
        aptList: response.data.filter(item => item.complex_type === 0),
        officeList: response.data.filter(item => item.complex_type === 1),
        total: response.data.length,
        loading: false,
      });
    } catch {
      console.log('error');
      setState({
        loading: false,
      });
    }
  }

  function reset() {
    setState(INIT);
    setIsOpen(false);
  }

  return {
    state,
    handleChange,
    reset,
  };
}

export default useSearch;
