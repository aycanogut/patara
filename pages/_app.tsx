import type { AppProps } from 'next/app';

import { Inter, Geist } from 'next/font/google';

import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-inter',
});

const geist = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-geist',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${geist.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
