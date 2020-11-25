import React from 'react';
import useSearch from './useSearch';
import SearchResult from '../searchResult/index';
import { Search, InputWrap, Input } from './styled';
// import { ReactComponent as SearchSvg }  from './images/search.svg';


function SearchInput() {
  const [
    subList,
    aptList,
    etcList,
    total,
    keyword,

    handleChange
  ] = useSearch();

  console.log('흠',aptList);
  return(
    <>
      <Search>
        <InputWrap>
          {/* <SearchSvg className="icon" width="25" height="25" /> */}
          <Input type="text" value={keyword} onChange={handleChange} /> 
        </InputWrap> 
      </Search>  
      <SearchResult
        subList={subList}
        aptList={aptList}
        etcList={etcList}
        total= {total}
      />
    </>
  );
}
export default SearchInput; 
