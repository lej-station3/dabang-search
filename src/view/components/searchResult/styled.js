import styled, { css } from 'styled-components';

export const ResultWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;

  > div {
    display: flex;
    width: 1180px;
    margin-top: 30px;
    border: 1px solid #dddddd;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  & ~ & {
    margin-bottom: 15px;
  }
`;


const resultStd = css`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
`;

export const RecentList = styled.div`
  ${resultStd};
  height: 400px;
`;

export const ResultList = styled.div`
  ${resultStd}
  margin-left: 50px;
`;

export const CartegoryTitle = styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
`;

const titleStd = css`
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow-y: scroll;
  list-style: none;
  color: #000;
  font-size: 14px;
  cursor: pointer;
`;

export const SearchTitle = styled.ul`
   ${titleStd}
   margin-left: 40px;
`;

export const ItemTitle = styled.ul`
  ${titleStd}
  margin-top: 12px;
`;

// useResult 

export const CategoryText = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 10px;
`; 

const categoryStd = css`
   display: flex;
   padding: 15px 10px;
  .adress{
    margin-top: 7px;
    font-weight: normal;
    font-size: 11px;
    color: rgb(153, 153, 153);
      &:hover{
        color: #000;
      }
  }
`;

//억지로 재사용 금G
export const LocalCategoryEtcText = styled.li`
  ${categoryStd}
  align-items: center;
`;

export const CategoryEtcText = styled.li`
  ${categoryStd}
  flex-direction: column;
  justify-content: center;  
`;

export const SearchIcon = styled.div`
  margin-left: auto;
`;

export const Sub = styled.span`
  background-color: ${({ color }) => color || 'white'};
  min-width: 18px;
  padding: 3px 6px;
  ${({ isFilter }) => isFilter ? css`
    color: #000;
    border: 1px solid #000;
  ` : css`
    color: #fff;
    border: 0;
  `};
  font-size: 10px;
  text-align: center;
  line-height: 18px;
  border-radius: 18px;

  & + span {
    margin-left: 4px;
  }
`;

export const RoomText = styled.span`
  margin-right: 4px;
  padding: 2px 7px;
  border: 1px solid #000;
  border-radius: 7px;
  font-size: 10px;
  color: #000; 
`;

// loading 
export const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const LodingText = styled.p`
  font-size: 15px;
  font-weight: 600;
`;
