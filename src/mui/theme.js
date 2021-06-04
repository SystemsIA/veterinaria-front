import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffca28',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: ['"Assistant"', 'sans-serif'].join(','),
    fontSize: 15,
    fontWeightMedium: 'bold',
    fontWeightRegular: 'bold',
    fontWeightLight: 'normal',
  },
});
