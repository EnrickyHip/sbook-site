import { ThemeContextProvider } from '@/Context/ThemeContext';
import { GlobalStyles } from '@/styles/globalStyles';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
