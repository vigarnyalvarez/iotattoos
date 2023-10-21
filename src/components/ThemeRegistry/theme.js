import { Quicksand } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import { light } from './palette';

const quicksand = Quicksand({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: light,
  shadows: shadows(),
  typography: {
    fontFamily: quicksand.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
