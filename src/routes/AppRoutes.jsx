import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinearProgress, makeStyles } from '@material-ui/core';

import { CATALOGO, INICIO, SERVICIOS, VETSANLOR } from './link';

// Pages - Components
const InicioPage = lazy(() => import('../pages/InicioPage'));
const CatalogoPage = lazy(() => import('../pages/CatalogoPage'));
const VeterinariaPage = lazy(() => import('../pages/VeterinariaPage'));
const ServicioPage = lazy(() => import('../pages/ServicioPage'));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Fallback = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinearProgress color="primary" />
    </div>
  );
};

export function AppRoutes() {
  return (
    <BrowserRouter basename={INICIO}>
      <Switch>
        <Suspense fallback={<Fallback />}>
          <Route path={CATALOGO} component={CatalogoPage} />
          <Route path={VETSANLOR} component={VeterinariaPage} />
          <Route path={SERVICIOS} component={ServicioPage} />
          <Route exact path={INICIO} component={InicioPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}
