import styled, { css } from 'styled-components';


const Text = css`
  font-size: 16px;
  font-weight: bold;
`;

export const Ul = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 392px;
  background: #000;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.1);
  color: #fff;
`;

export const Subway = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Apt = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

`;

export const Officetel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;

`;

export const CartegortTitle = styled.div`
    ${Text}
`;

