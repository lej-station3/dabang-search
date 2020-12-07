import React from 'react';

import useSearch from './useSearch';
import useOutSide from './useOutSide';

import SearchResult from '../searchResult/index';

import { 
  Search, SearchWrap,
  Form, InputWrap, Input
} from './styled';
import { ReactComponent as SearchSvg }  from './images/search.svg';

function SearchInput() {
  const {
    _open,
    isOpen,
    setIsOpen,
  } = useOutSide();

  const {
    state,
    handleChange,
    reset,
  } = useSearch(setIsOpen);

  const { subList, aptList, officeList, loading, total, keyword } = state;

  return (
    <SearchWrap>
      <Search>
        <Form ref={_open}>
          <InputWrap>
            <SearchSvg className="icon" width="25" height="25"/>
            <Input type="text" name="keyword" value={keyword} onChange={handleChange} autoComplete="off" />
          </InputWrap> 
          {isOpen &&  
            <SearchResult
              subList={subList}
              aptList={aptList}
              officeList={officeList}
              loading={loading}
              total={total}
              keyword={keyword}
              close={reset}
            /> 
          }    
        </Form>
      </Search>
    </SearchWrap>
  );
}
export default SearchInput; 
