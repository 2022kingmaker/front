import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: `#3D7B80`,
    first: '#1F4D9C',
    second: '#D33736',
    third: '#F7CE46',
    fourth: '#D95F29',
    activeBorder: '#22c3d3',
    disable: '#c2c1c1',
  },
  font: {
    small: '12px',
    middle: '16px',
    large: '24px',
  },
  desktop: `(max-width: 880px)`,
  mobile: `(max-width: 580px)`,
};

export default theme;
