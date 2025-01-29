import { extendTheme } from '@chakra-ui/react';
import nubesImage from '../assets/nubes.jpg';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgImage: `url(${nubesImage})`,
        bgSize: 'cover',
        bgPosition: 'center',
        bgRepeat: 'no-repeat',      

      },
    },
  }
});

export default theme;