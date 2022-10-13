import { createTheme } from '@mui/material';

const themeOptions = {
    palette: {
      primary: {
        main: '#004e8a',
      },
      secondary: {
        main: '#1e5c0a',
      },
    },
    typography: {
        h2: {
          fontFamily: 'Roboto',
        },
      },
  };
  
  const theme = createTheme(themeOptions);
//   const theme = createTheme({});
  
  export { theme }