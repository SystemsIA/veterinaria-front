import { CssBaseline } from '@material-ui/core';
import { Fragment } from 'react';

import { AppRoutes } from './routes';

function VeterinariaApp() {
  return (
    <Fragment>
      <CssBaseline />
      <AppRoutes />
    </Fragment>
  );
}

export default VeterinariaApp;
