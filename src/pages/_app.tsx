import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { Layout } from '../components/Layout';

import { theme } from "../styles/theme";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '../styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
