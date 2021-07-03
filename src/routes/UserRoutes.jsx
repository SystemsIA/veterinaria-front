import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimateSharedLayout } from 'framer-motion';
import UserPerfilPage from 'pages/user/UserPerfilPage';
import * as LINKS from 'routes';
import NotFoundPage from 'pages/errors/NotFoundPage';
import UserMascotasPage from 'pages/user/UserMascotasPage';
import UserCitasPage from 'pages/user/UserCitasPage';
import MascotaHistorialPage from 'pages/mascotas/MascotaHistorialPage';
import UserInicioPage from 'pages/user/UserInicioPage';

function UserRoutes(props) {
	const url = props.match.url;
	const location = useLocation();

	return (
		<AnimateSharedLayout>
			<Switch location={location} key={location.pathname}>
				<Route
					exact
					path={`${url}${LINKS.USER_MASCOTAS}${LINKS.MASCOTA_HISTORIAL}`}
					component={MascotaHistorialPage}
				/>
				<Route path={`${url}${LINKS.USER_PERFIL}`} component={UserPerfilPage} />

				<Route
					exact
					path={`${url}${LINKS.USER_MASCOTAS}`}
					component={UserMascotasPage}
				/>

				<Route path={`${url}${LINKS.USER_CITAS}`} component={UserCitasPage} />

				<Route
					exact
					path={`${LINKS.USER_INICIO}/inicio`}
					component={UserInicioPage}
				/>

				<Route path='/:rest*' component={NotFoundPage} />

				<Redirect exact from={LINKS.USER_INICIO} to={LINKS.USER_PERFIL} />
			</Switch>
		</AnimateSharedLayout>
	);
}

export default UserRoutes;
