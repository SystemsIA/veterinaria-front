import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress, makeStyles } from '@material-ui/core';

import * as LINKS from './link';

// Pages - Components
const InicioPage = lazy(() => import('../pages/InicioPage'));
const CatalogoPage = lazy(() => import('../pages/CatalogoPage'));
const VeterinariaPage = lazy(() => import('../pages/VeterinariaPage'));
const ServicioPage = lazy(() => import('../pages/ServicioPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

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
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route exact path={LINKS.INICIO} component={InicioPage} />
        <Route path={LINKS.LOGIN} component={LoginPage} />
        <Route path={LINKS.CATALOGO} component={CatalogoPage} />
        <Route path={LINKS.VETSANLOR} component={VeterinariaPage} />
        <Route path={LINKS.SERVICIOS} component={ServicioPage} />
      </Switch>
    </Suspense>
  );
}
