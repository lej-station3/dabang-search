import { useState } from 'react';
import axios from 'axios';

function useSearch() {
  const [subList, setSubList] = useState([]);
  const [aptList, setAptList] = useState([]);
  const [etcList, setEtcList] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [total, setTotal] = useState(0);

  const handleChange = e => {
    setKeyword(e.currentTarget.value);
    getList();
  };

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
      setEtcList(response.data.filter(item => item.complex_type === 1));
      setTotal(response.data.length);
    } catch {
      console.log('error');
    }
  }

  // const apt = aptList.map(apt => {
  //   return {
  //     name: apt.name,
  //     adress: apt.complex_address
  //   };
  // });

  return [
    subList,
    aptList,
    etcList,
    total,
    keyword,
    handleChange,
  ];
}

export default useSearch;
