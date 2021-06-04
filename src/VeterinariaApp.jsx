import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { theme } from './mui/theme';
import { AppRoutes, INICIO } from './routes';

function VeterinariaApp() {
  return (
    <BrowserRouter basename={INICIO}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default VeterinariaApp;
