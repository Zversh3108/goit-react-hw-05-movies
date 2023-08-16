import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const Theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#180909',
        },
        secondary: {
          main: '#000000',
        },
        text: {
          primary: 'rgba(12,11,11,0.87)',
        },
      },
});