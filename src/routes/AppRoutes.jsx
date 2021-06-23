import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress, makeStyles } from '@material-ui/core';

import * as LINKS from 'routes';

// Routes
import MedicoRoutes from 'routes/MedicoRoutes';
import UserRoutes from 'routes/UserRoutes';
import ProtectedRoute from 'routes/ProtectedRoute';

// Pages
import NotFoundPage from 'pages/errors/NotFoundPage';
import ForbiddenPage from 'pages/errors/ForbiddenPage';
import UnauthorizedPage from 'pages/errors/UnauthorizedPage';

// Pages - Lazy
const InicioPage = lazy(() => import('pages/InicioPage'));
const CatalogoPage = lazy(() => import('pages/CatalogoPage'));
const VeterinariaPage = lazy(() => import('pages/VeterinariaPage'));
const ServicioPage = lazy(() => import('pages/ServicioPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

// Custom Styles
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		position: 'fixed',
		top: 0,
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
				<Route path={LINKS.CATALOGO} component={CatalogoPage} />
				<Route path={LINKS.LOGIN} component={LoginPage} />
				<Route path={LINKS.VETSANLOR} component={VeterinariaPage} />
				<Route path={LINKS.SERVICIOS} component={ServicioPage} />

				<ProtectedRoute path={LINKS.USER} component={UserRoutes} />
				<ProtectedRoute
					options={{ isRouteDoctor: true }}
					path={LINKS.MEDICO_INICIO}
					component={MedicoRoutes}
				/>

				<ProtectedRoute path={LINKS.FORBIDDEN} component={ForbiddenPage} />
				<Route path={LINKS.UNAUTHORIZED} component={UnauthorizedPage} />
				<Route path="/:rest*" component={NotFoundPage} />
			</Switch>
		</Suspense>
	);
}
