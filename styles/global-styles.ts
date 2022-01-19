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
    h2, h3{
      scroll-margin-top: 72px;
    }
    li, ul{
      list-style: none;
      margin: 0; 
      padding: 0;
    }
`;

export default GlobalStyles;
