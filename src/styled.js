import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    
  }

  input,button,textarea {
    background:none;
    border: none;
    box-shadow: none;
    outline: none;
    text-decoration:none;
    cursor: pointer;
    }

  button:active,
  input:active {
    outline: none;
    box-shadow: none;
  }
`;
