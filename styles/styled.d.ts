import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [propsName: string]: string;
    };
    font: {
      small: string;
      middle: string;
      large: string;
    };
    desktop: string;
    mobile: string;
  }
}
