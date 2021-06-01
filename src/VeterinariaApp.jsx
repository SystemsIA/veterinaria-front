import { CssBaseline } from '@material-ui/core';
import { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuAppBar from './components/MenuAppBar';

import { AppRoutes, INICIO } from './routes';

function VeterinariaApp() {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <BrowserRouter basename={INICIO}>
        <CssBaseline />
        <AppRoutes />
        <MenuAppBar open={open} setOpen={setOpen} />
      </BrowserRouter>
    </Fragment>
  );
}

export default VeterinariaApp;
