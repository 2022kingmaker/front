import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: stirng;
      first: string;
      second: string;
      third: string;
      fourth: string;
    };
    font: {
      small: string;
      middle: string;
      large: string;
    };
  }
}
