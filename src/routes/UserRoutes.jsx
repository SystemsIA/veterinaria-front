import { Redirect, Route, Switch } from 'react-router-dom';
import UserPerfilPage from 'pages/user/UserPerfilPage';
import * as LINKS from 'routes';
import NotFoundPage from 'pages/errors/NotFoundPage';

function UserRoutes() {
	return (
		<Switch>
			<Redirect exact from={LINKS.USER_HOME} to={LINKS.USER_PERFIL} />
			<Route path={LINKS.USER_PERFIL} component={UserPerfilPage} />
			<Route path="/:rest*" component={NotFoundPage} />
		</Switch>
	);
}

export default UserRoutes;
