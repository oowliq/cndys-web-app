import 'styled-components';

interface Pallete {
    accent: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        pallete: Pallete;
    }
}
