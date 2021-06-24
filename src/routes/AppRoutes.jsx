import { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// Components
import MenuAppBar from 'components/MenuAppBar';
import Fallback from 'components/Fallback';

// Routes
import MedicoRoutes from 'routes/MedicoRoutes';
import UserRoutes from 'routes/UserRoutes';
import ProtectedRoute from 'routes/ProtectedRoute';
import * as LINKS from 'routes';

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

export function AppRoutes() {
	const location = useLocation();

	return (
		<Suspense fallback={<Fallback />}>
			{location.pathname === `/medico${LINKS.MEDICO_TAREAS}` ? null : (
				<MenuAppBar />
			)}
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
