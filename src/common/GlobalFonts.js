import { createGlobalStyle } from 'styled-components';

import perm from '../assets/fonts/perm.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Perm;
    font-style: normal;
    font-weight: 400;
    src: url(${perm});
  }
`;
