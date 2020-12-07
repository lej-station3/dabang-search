import React from 'react';
import { LoadingWrap, LodingText, ResultWrap } from '../../styled';

function LodingScreen() {
  return(
    <ResultWrap>
      <LoadingWrap>
        <LodingText>🪐Loading . . .👩🏻‍💻</LodingText>
      </LoadingWrap>
    </ResultWrap>
  );
}

export default LodingScreen;
