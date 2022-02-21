import Head from 'next/head';
import { ReactElement } from "react";

import { Header } from './Header';

type LayoutProps = {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Header />

      {children}
    </>
  );
}
