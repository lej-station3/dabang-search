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
  });

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

  const handleChange = e => {
    const { name,value } = e.currentTarget;
    //오브젝트를 string으로 변환
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
    const url='/api/3/loc/keyword';
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
  return {
    state,
    handleChange,
  };
}
export default useSearch;
