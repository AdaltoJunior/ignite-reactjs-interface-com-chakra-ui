import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    background: '#F5F8FA',
    highlight: '#FFBA08',
    light: {
      white: '#FFFFFF',
      text: '#F5F8FA',
      info: '#DADADA',
    },
    dark: {
      black: '#000000',
      text: '#47585B',
      info: '#999999',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        background: 'background',
        color: 'dark.text'
      },
    },
  },
});
