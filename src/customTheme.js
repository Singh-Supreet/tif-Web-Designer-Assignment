import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const fonts = {
  ...chakraTheme.fonts,
  textStyles: {
    head: {
      fontFamily: 'Source Sans Pro',
      fontWeight:'700'
    },
    subhead: {
      fontFamily: 'Poppins',
    },
    para: {
      fontFamily: 'Open Sans',
    },
  },
  
};

const customTheme = extendTheme(fonts);

export default customTheme;
