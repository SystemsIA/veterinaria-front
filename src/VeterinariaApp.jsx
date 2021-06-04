import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@material-ui/core';

import { theme } from './mui/theme';
import { AppRoutes, INICIO } from './routes';

function VeterinariaApp() {
  return (
    <Fragment>
      <CssBaseline />
      <BrowserRouter basename={INICIO}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </Fragment>
  );
}

export default VeterinariaApp;
