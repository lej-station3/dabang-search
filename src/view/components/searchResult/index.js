import React from 'react';

import useResult from './useResult';

import LodingScreen from './components/loading';
import BaseComponent from './components/base';

import {
  RecentList,
  ResultList, ResultWrap, CartegoryTitle, ItemTitle,
  NoResult,
  SearchTitle,
  LodingText, LoadingWrap,
} from './styled';

function SearchResult({ subList, aptList, officeList, isLoading, total, keyword, close }) { 
  const {
    printSubList,
    printOfficeList,
    printAptList, 
  } = useResult(close);

  if (keyword === '') {
    return (
      <ResultWrap>
        <RecentList>
          <NoResult>인기 검색</NoResult>
          <NoResult>최근 검색 기록</NoResult>
          <SearchTitle>
            <BaseComponent />
          </SearchTitle>
        </RecentList>
      </ResultWrap>
    );
  }
  
  if (isLoading) {
    return (
      <LodingScreen />
    );
  }

  if (total <= 0) {
    return (
      <ResultWrap>
        <LoadingWrap>
          <LodingText>
            검색 결과가 없습니다 🥺 단어의 철자가 정확한지 확인해 보세요.
          </LodingText>
        </LoadingWrap>
      </ResultWrap>
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
