import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.200', // fondo global
      },
    },
  }
});

export default theme;