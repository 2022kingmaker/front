import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    @font-face {
      font-family: "NotoSansKorean";
      font-display: fallback;
      src: url("/fonts/NotoSansKR-Medium-Hestia.woff") format("woff");
    }
    textarea{
      font-family: "NotoSansKorean", sans-serif;
    }
    *{
      color: #333;
      box-sizing: border-box;
    }
    html, body, #__next{
      height: 100%;
      background: #F2F2F2;
      font-family: "NotoSansKorean", sans-serif;
    }
    body.modal-on{
      overflow-y: hidden;
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
