import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import UserPerfilPage from 'pages/user/UserPerfilPage';
import * as LINKS from 'routes';
import NotFoundPage from 'pages/errors/NotFoundPage';

function UserRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Switch location={location} key={location.pathname}>
				<Redirect exact from={LINKS.USER_HOME} to={LINKS.USER_PERFIL} />
				<Route path={LINKS.USER_PERFIL} component={UserPerfilPage} />
				<Route path="/:rest*" component={NotFoundPage} />
			</Switch>
		</AnimatePresence>
	);
}

export default UserRoutes;
