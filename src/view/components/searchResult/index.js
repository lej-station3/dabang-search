import React from 'react';
import useResult from './useResult';
import { ResultList, ResultWrap, CartegoryTitle, ItemTitle, NoResultText, NoResult  } from './styled';

function SearchResult({ subList, aptList, officeList, loading, total, keyword }) { 

  const {
    printSubList,
    printOfficeList,
    printAptList,
  } = useResult(keyword);

  if (keyword === '') {
    return (
      <ResultWrap>
        <NoResult>
          <NoResultText>인기검색</NoResultText>
          <NoResultText>
            최근검색
          </NoResultText>
        </NoResult>
      </ResultWrap>
    );
  }
  
  if (loading) {
    return (
      <ResultWrap>
        <div>
          <p className="loadging"> Loading. . .</p>
        </div>
      </ResultWrap>
    );
  }

  if (total <= 0) {
    console.log('total', total);
    return (
      <div>
        <ResultWrap>
          <NoResult>
            <NoResultText>검색 결과가 없습니다.</NoResultText>
            <NoResultText>단어의 철자가 정확한지 확인해 보세요.</NoResultText>
          </NoResult>
        </ResultWrap>
      </div>
    );
  }
  return (
    <ResultWrap>
      <div>
        {subList.length !== 0 &&
            <ResultList>
              <CartegoryTitle>지역,지하철,대학교</CartegoryTitle>
              <ItemTitle>{printSubList(subList)}</ItemTitle>
            </ResultList>
        }

        {officeList.length !== 0 && 
            <ResultList>
              <CartegoryTitle>오피스텔</CartegoryTitle>
              <ItemTitle>{printOfficeList(officeList)}</ItemTitle>
            </ResultList>
        }

        {aptList.length !== 0 &&
            <ResultList>
              <CartegoryTitle>아파트</CartegoryTitle>
              <ItemTitle>{printAptList(aptList)}</ItemTitle>
            </ResultList>     
        }
      </div>
    </ResultWrap>
  );
}

export default SearchResult;
