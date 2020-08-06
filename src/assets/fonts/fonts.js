import { createGlobalStyle } from 'styled-components';

import perm from './perm.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Perm';
        src: local('Perm'), local('Perm'),
        url(${perm}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
