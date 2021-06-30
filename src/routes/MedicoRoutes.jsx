import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { AnimateSharedLayout } from 'framer-motion';
import * as LINKS from 'routes';

import MedicoHome from 'pages/medico/index';
import MedicoTareasPage from 'pages/medico/MedicoTareasPage';
import MedicoMascotasPage from 'pages/medico/MedicoMascotasPage';
import MedicoCatalogoPage from 'pages/medico/MedicoCatalogoPage';
import MascotaHistorialPage from 'pages/mascotas/MascotaHistorialPage';
import NotFoundPage from 'pages/errors/NotFoundPage';

function MedicoRoutes(props) {
	const location = useLocation();
	let url = props.match.url;

	return (
		<AnimateSharedLayout key={url}>
			<Switch location={location} key={location.pathname}>
				<Route
					exact
					path={`${url}${LINKS.MEDICO_MASCOTAS}${LINKS.MASCOTA_HISTORIAL}`}
					component={MascotaHistorialPage}
				/>
				<Route
					path={`${url}${LINKS.MEDICO_TAREAS}`}
					component={MedicoTareasPage}
				/>
				<Route
					path={`${url}${LINKS.MEDICO_MASCOTAS}`}
					component={MedicoMascotasPage}
				/>
				<Route
					path={`${url}${LINKS.MEDICO_CATALOGO}`}
					component={MedicoCatalogoPage}
				/>

				<Route exact path={LINKS.MEDICO_INICIO} component={MedicoHome} />

				<Route path="/:rest*" component={NotFoundPage} />
				<Redirect exact to={LINKS.MEDICO_INICIO} from={LINKS.MEDICO_INICIO} />
			</Switch>
		</AnimateSharedLayout>
	);
}

export default MedicoRoutes;
