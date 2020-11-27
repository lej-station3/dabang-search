import React from 'react';
import useSearch from './useSearch';
import SearchResult from '../searchResult/index';
import { Search, InputWrap, Input } from './styled';
import { ReactComponent as SearchSvg }  from './images/search.svg';

function SearchInput() {
  const {
    subList,
    aptList,
    officeList,
    keyword,  
    loading,
    total,
    handleChange,
  } = useSearch();
  
  return(
    <>
      <Search>
        <InputWrap>
          <SearchSvg className="icon" width="25" height="25" />
          <Input type="text" name="keyword" value={keyword} onChange={handleChange} autoComplete="off" />
        </InputWrap> 
      </Search>  
      <SearchResult
        subList={subList}
        aptList={aptList}
        officeList={officeList}
        loading={loading}
        total={total}
        keyword={keyword}
      />
    </>
  );
}
export default SearchInput; 
