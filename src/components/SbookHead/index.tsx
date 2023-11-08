import { lightTheme } from '@/styles/theme';
import Head from 'next/head';

interface SbookHeadProps {
  title: string;
}

export function SbookHead({ title }: SbookHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="theme-color" content={lightTheme.colors.background.primary} />
    </Head>
  );
}
