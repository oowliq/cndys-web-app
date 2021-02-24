import { createGlobalStyle } from 'styled-components';
import { reset, base } from './partials';

const GlobalStyles = createGlobalStyle`
    ${reset};
    ${base};
`;

export { GlobalStyles };
export default GlobalStyles;
