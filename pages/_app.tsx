import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globals.styles';
import type { AppProps } from 'next/app';

const theme = {
  colors: {
    primary: '#fafafa',
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
