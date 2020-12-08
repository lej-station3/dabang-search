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
  total: 0,
};


function useSearch(setIsOpen) {
  const [isLoading, setLoading] = useState(false);
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
      setLoading(true);
    }
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  //changeKeword 어떤걸 바꿀 수 있는지 써주는게 좋음
  const changeKeyword = e => {
    const { name,value } = e.currentTarget;
    setState({
      [name]: value,
    });
    setLoading(true);
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
      });
      setLoading(false);
    } catch {
      console.log('error');
      setLoading(false);
    }
  }

  function reset() {
    setState(INIT);
    setIsOpen(false);
  }

  return {
    state,
    isLoading,
    changeKeyword,
    reset,
  };
}

export default useSearch;
