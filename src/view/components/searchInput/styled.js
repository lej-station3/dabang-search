import styled from 'styled-components';

export const Search = styled.div `
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 242px;
  background: linear-gradient(116deg, #13b7cf 0%, #365bb4 47%, #365bb4 47%);
`;

export const SearchWrap = styled.div`
  
`;

export const InputWrap = styled.div`    
    position: relative;
    width: 1180px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 7px 15px -2px rgba(0, 0, 0, 0.1);
    &:focus{
      border: 1px solid #60a3ff;
      //누를때 꾸욱 되는거 
    }

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
    width: 100%;
    padding: 0 25px;
    margin: 25px;
    margin-left: 40px;
  
`;