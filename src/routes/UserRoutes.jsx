import { Redirect, Route, Switch } from 'react-router-dom';
import UserPerfilPage from 'pages/user/UserPerfilPage';
import * as LINKS from 'routes';
import NotFoundPage from 'pages/errors/NotFoundPage';

function UserRoutes() {
	return (
		<Switch>
			<Redirect exact from={LINKS.USER} to={LINKS.PERFIL} />
			<Route path={LINKS.PERFIL} component={UserPerfilPage} />
			<Route path="/:rest*" component={NotFoundPage} />
		</Switch>
	);
}

export default UserRoutes;
