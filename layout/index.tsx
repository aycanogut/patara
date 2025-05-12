import { PropsWithChildren } from 'react';

import Head from 'next/head';

import OpenGraphMeta from '@/components/open-graph';

import Header from './Header';

interface Props extends PropsWithChildren {
  meta: {
    title: string;
    description?: string;
  };
}

function Layout({ children, meta }: Props) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {meta.description && (
          <meta
            name="description"
            content={meta.description ?? 'patara is a platform for creating and managing your own NFTs'}
          />
        )}
        <OpenGraphMeta />
      </Head>

      <Header />
      <main className="bg-background-default">{children}</main>
    </>
  );
}

export default Layout;
