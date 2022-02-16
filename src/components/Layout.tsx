import { ReactElement } from "react";

import { Header } from './Header';

type LayoutProps = {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
