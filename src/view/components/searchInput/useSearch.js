import { useEffect, useState } from 'react';
import axios from 'axios';
import { debounce } from 'throttle-debounce';

function useSearch() {
  const [subList, setSubList] = useState([]);
  const [aptList, setAptList] = useState([]);
  const [officeList, setOfficeList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [debounceKeyword, setDebounceKeysord] = useState('');
  const [loading, setLoading] = useState(null);
  const [total, setTotal] = useState(0);


  const handleChange = e => {
    console.log(e);
    const { value } = e.currentTarget;
    setKeyword(value);
    setLoading(true);
  };

  const debounceFunc = debounce(400, false, value  => {
    setDebounceKeysord(value);
    getList();
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      debounceFunc(keyword);
    },300);
    return () => {
      clearTimeout(debounce);
    };
  }, [keyword]);

  async function getList() {
    const url='http://test-dabang-main.dabangapp.com/api/3/loc/keyword';
    try {
      const response = await axios.get(url, {
        params: {
          api_version: '3.0.1',
          keyword,
        }
      });
      setSubList(response.data.filter(item => item.complex_type === null));
      setAptList(response.data.filter(item => item.complex_type === 0));
      setOfficeList(response.data.filter(item => item.complex_type === 1));
      setTotal(response.data.length);
      setLoading(false);

    } catch {
      console.log('error');
      setLoading(false);
    }
  }

  return {
    subList,
    aptList,
    officeList,
    keyword,
    debounceKeyword,
    loading,
    total,
    debounceFunc,
    handleChange,
  };
}

export default useSearch;
