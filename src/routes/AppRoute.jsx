import { Fragment, lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import MenuAppBar from 'components/ui/MenuAppBar';
import Fallback from 'components/Fallback';

// Routes
import MedicoRoutes from './MedicoRoutes';
import UserRoutes from './UserRoutes';
import * as LINKS from './link';

// Pages
import NotFoundPage from 'pages/errors/NotFoundPage';
import ForbiddenPage from 'pages/errors/ForbiddenPage';
import UnauthorizedPage from 'pages/errors/UnauthorizedPage';

// Route - Lazy
const ProtectedRoute = lazy(() => import('components/ProtectedRoute'));

// Pages - Lazy
const InicioPage = lazy(() => import('pages/InicioPage'));
const CatalogoPage = lazy(() => import('pages/CatalogoPage'));
const VeterinariaPage = lazy(() => import('pages/VeterinariaPage'));
const ServicioPage = lazy(() => import('pages/ServicioPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ProductoPage = lazy(() => import('pages/ProductoPage'));

export function AppRoute() {
	const location = useLocation();

	return (
		<Fragment key='app-routes'>
			{location.pathname.includes('/medico') ||
			location.pathname.includes('/user') ? null : (
				<MenuAppBar />
			)}
			<Suspense fallback={<Fallback />}>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path={LINKS.INICIO} component={InicioPage} />
						<Route exact path={LINKS.PRODUCTO} component={ProductoPage} />
						<Route path={LINKS.CATALOGO} component={CatalogoPage} />
						<Route path={LINKS.LOGIN} component={LoginPage} />
						<Route path={LINKS.VETSANLOR} component={VeterinariaPage} />
						<Route path={LINKS.SERVICIOS} component={ServicioPage} />

						<ProtectedRoute path={LINKS.USER_INICIO} component={UserRoutes} />

						<ProtectedRoute
							options={{ isRouteDoctor: true }}
							path={LINKS.MEDICO_INICIO}
							component={MedicoRoutes}
						/>

						<ProtectedRoute path={LINKS.FORBIDDEN} component={ForbiddenPage} />

						<Route path={LINKS.UNAUTHORIZED} component={UnauthorizedPage} />

						<Route path='/:rest*' component={NotFoundPage} />
					</Switch>
				</AnimatePresence>
			</Suspense>
		</Fragment>
	);
}
