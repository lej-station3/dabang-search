import React, { useRef, useState } from 'react';
import useSearch from './useSearch';
import useOutSide from './useOutSide';
import SearchResult from '../searchResult/index';
import { Search, InputWrap, Input, SearchWrap } from './styled';
import { ReactComponent as SearchSvg }  from './images/search.svg';

function SearchInput() {
  const {
    state,
    handleChange,
  } = useSearch();

  const { subList, aptList, officeList, loading, total, keyword } = state;
  const [isOpen, setIsOpen] = useState(false);
  const _open = useRef();

  useOutSide(_open, () => {
    if (isOpen){
      setIsOpen(false);
    }
  });

  return(
    <SearchWrap ref={_open} onClick={() => setIsOpen(!isOpen)}>
      <Search>
        <InputWrap>
          <SearchSvg className="icon" width="25" height="25" />
          <Input type="text" name="keyword" value={keyword} onChange={handleChange} autoComplete="off" />
        </InputWrap> 
      </Search>  
      {isOpen &&  
        <SearchResult
          subList={subList}
          aptList={aptList}
          officeList={officeList}
          loading={loading}
          total={total}
          keyword={keyword}
        /> 
      }    
    </SearchWrap>
  );
}
export default SearchInput; 
