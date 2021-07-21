import { Redirect, Route, Switch } from 'react-router-dom';
import { AnimateSharedLayout } from 'framer-motion';
import * as LINKS from 'routes';

import MedicoInicioPage from 'pages/medico/MedicoInicioPage';
import MedicoTareasPage from 'pages/medico/MedicoTareasPage';
import MedicoMascotasPage from 'pages/medico/MedicoMascotasPage';
import MedicoCatalogoPage from 'pages/medico/MedicoCatalogoPage';
import MascotaHistorialPage from 'pages/mascotas/MascotaHistorialPage';
import MedicoClientesPage from 'pages/medico/MedicoClientesPage';
import MedicoCitasPage from 'pages/medico/MedicoCitasPage';
import MedicoInventariosPage from 'pages/medico/MedicoInventariosPage';
import NotFoundPage from 'pages/errors/NotFoundPage';
import MascotaClientePage from 'pages/mascotas/MascotaClientePage';

function MedicoRoutes(props) {
	const location = props.location;
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
					exact
					path={`${url}/clientes/:clientId${LINKS.MEDICO_MASCOTAS}`}
					component={MascotaClientePage}
				/>
				<Route
					exact
					path={`${url}/clientes/:clientId${LINKS.MEDICO_MASCOTAS}${LINKS.MASCOTA_HISTORIAL}`}
					component={MascotaHistorialPage}
				/>

				<Route
					exact
					path={`${url}${LINKS.MEDICO_MASCOTAS}`}
					component={MedicoMascotasPage}
				/>

				<Route
					path={`${url}${LINKS.MEDICO_TAREAS}`}
					component={MedicoTareasPage}
				/>

				<Route
					path={`${url}${LINKS.MEDICO_CLIENTES}`}
					component={MedicoClientesPage}
				/>

				<Route
					path={`${url}${LINKS.MEDICO_CITAS}`}
					component={MedicoCitasPage}
				/>

				<Route
					path={`${url}${LINKS.MEDICO_INVENTARIO}`}
					component={MedicoInventariosPage}
				/>

				<Route
					path={`${url}${LINKS.MEDICO_CATALOGO}`}
					component={MedicoCatalogoPage}
				/>

				<Route exact path={LINKS.MEDICO_INICIO} component={MedicoInicioPage} />

				<Route path='/:rest*' component={NotFoundPage} />
				<Redirect exact to={LINKS.MEDICO_INICIO} from={LINKS.MEDICO_INICIO} />
			</Switch>
		</AnimateSharedLayout>
	);
}

export default MedicoRoutes;
