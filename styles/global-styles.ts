import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
      color: #333;
      box-sizing: border-box;
    }
    html, body, #__next{
      height: 100%;
      background: #F2F2F2;
    }
    a {
      text-decoration: none; 
      outline: none;
      &:hover, a:active, a:visited{
        text-decoration: none;
      }
    }
`;

export default GlobalStyles;
