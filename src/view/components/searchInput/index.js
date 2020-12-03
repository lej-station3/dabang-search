import React, { useRef, useState } from 'react';
import useSearch from './useSearch';
import useOutSide from './useOutSide';
import SearchResult from '../searchResult/index';
import { Search, InputWrap, Input, SearchWrap, Form } from './styled';
import { ReactComponent as SearchSvg }  from './images/search.svg';

function SearchInput() {
  const {
    state,
    handleChange,
  } = useSearch();

  const { subList, aptList, officeList, loading, total, keyword } = state;
  const [isOpen, setIsOpen] = useState(false);
  const _open = useRef(null);

  useOutSide(_open, setIsOpen);

  return (
    <SearchWrap>
      <Search/>
      <Form ref={_open}>
        <InputWrap>
          <SearchSvg className="icon" width="25" height="25"/>
          <Input type="text" name="keyword" value={keyword} onChange={handleChange} autoComplete="off"/>
        </InputWrap> 
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
      </Form>
    </SearchWrap>
  );
}
export default SearchInput; 
