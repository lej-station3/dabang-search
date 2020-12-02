import styled from 'styled-components';

export const ResultWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 392px;
  margin-top: 10px;

  > div {
    display: flex;
    width: 1180px;
    margin-top: 30px;
    border: 1px solid #dddddd;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);

    .loadging {
      margin: 0 auto;
      margin-top: 20px;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const NoResult = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const NoResultText = styled.p`
  padding: 40px;
  font-size: 16px;
  color: fff;
  font-weight: 500;
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
  padding: 15px 10px;
`; 

export const CategoryEtcText = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const SearchIcon = styled.div`
  margin-left: auto;
`;

export const Sub = styled.span`
  background-color: ${({ color }) => color || 'white'};
  min-width: 18px;
  padding: 3px 6px;
  color: #fff;
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