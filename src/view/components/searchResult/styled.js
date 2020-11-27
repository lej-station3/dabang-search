import styled, { css } from 'styled-components';


export const ResultWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 392px;

  > div {
    display: flex;
    width: 1180px;
    margin-top: 10px;
    border: 1px solid #dddddd;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const NoResultText = styled.p`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
  font-size: 16px;
  color: fff;
  font-weight: 400;
`;

export const ResultList = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 40px;
`;

export const CartegoryTitle = styled.div`
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
`;

export const ItemTitle = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  overflow-y: scroll;
  list-style: none;
  color: #000;
  font-size: 14px;
  cursor: pointer;
`;


// useResult 

export const CategoryText = styled.li`
  display: flex;
  align-items: center;
  padding: 15px 0;
`; 

export const CategoryEtcText = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //요거 뭐더라
  padding: 15px 0;
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

export const SubwayIcon = styled.div`
  margin-left: auto;
`;


export const SubIcon = styled.div`

`;

export const Sub = styled.span`
  background-color: ${({ color }) => color || 'white'};
  min-width: 18px;
  height: 18px;
  padding: 2px 5px;
  color: #fff;
  font-size: 10px;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;

  & + span {
    margin-left: 10px;
  }
`;

export const RoomIcon = styled.div`

`;

export const RoomText = styled.div`
 
`;