import type { AppProps } from 'next/app';

import { Inter, Geist } from 'next/font/google';

import '@/styles/globals.css';
import cn from '@/lib/utils/cn';

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
    <div className={cn(inter.className, geist.className, 'bg-background-default min-h-screen')}>
      <Component {...pageProps} />
    </div>
  );
}
