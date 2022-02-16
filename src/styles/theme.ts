import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    background: "#f5f8fa",
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        background: 'background',
      },
    },
  },
});
