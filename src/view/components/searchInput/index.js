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
    state,
    handleChange,
  } = useSearch();

  const { subList, aptList, officeList, loading, total, keyword, roomId } = state;
  const {
    _open,
    isOpen,
  } = useOutSide();

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
              roomId={roomId}
            /> 
          }    
        </Form>
      </Search>
    </SearchWrap>
  );
}
export default SearchInput; 
