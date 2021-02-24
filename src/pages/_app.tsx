import React from 'react';
import { lightTheme } from 'app/theme';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GoogleFonts from 'next-google-fonts';
import Head from 'next/head';
import GlobalStyles from 'app/theme/styles/global';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" />
        <Head>
            <meta name="viewport" content="width=device-width, maximum-scale=1.0, shrink-to-fit=no" />
        </Head>
        <Component {...pageProps} />
    </ThemeProvider>
);

export default MyApp;
