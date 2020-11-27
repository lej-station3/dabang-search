import styled from 'styled-components';

export const Search = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 242px;
  background: linear-gradient(116deg, #13b7cf 0%, #365bb4 47%, #365bb4 47%);
`;

export const InputWrap = styled.div`    
    position: relative;
    width: 1180px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 7px 15px -2px rgba(0, 0, 0, 0.1);
    .icon{
    position: absolute;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
 }
`;

export const Input = styled.input.attrs({
  type: 'text',
})`
    width: 600px;
    padding: 0 25px;
    margin: 25px;
    margin-left: 40px;
    &:active{
      /* display: block; */
    }
`;