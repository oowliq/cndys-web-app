import { generateMedia } from 'styled-media-query';

const breakpoints = {
    xl: '1399.98px',
    lg: '1200px',
    md: '991.9px',
    sm: '768px',
    xs: '576px',
};

const media = generateMedia(breakpoints);

export { breakpoints, media };
export default media;
