import 'bootstrap/dist/css/bootstrap.min.css';

import { SessionContextProvider } from '@/Context/Session';
import { ThemeContextProvider } from '@/Context/ThemeContext';
import { GlobalStyles } from '@/styles/globalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <SessionContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </SessionContextProvider>
    </ThemeContextProvider>
  );
}
