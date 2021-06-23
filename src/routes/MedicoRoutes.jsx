import { Redirect, Route, Switch } from 'react-router-dom';
import * as LINKS from 'routes';

import MedicoHome from 'pages/medico/index';
import MedicoTaskPage from 'pages/medico/MedicoTaskPage';
import NotFoundPage from 'pages/errors/NotFoundPage';

function MedicoRoutes(props) {
	let url = props.match.url;

	return (
		<Switch>
			<Route path={`${url}${LINKS.MEDICO_TAREAS}`} component={MedicoTaskPage} />
			<Route exact path={LINKS.MEDICO_INICIO} component={MedicoHome} />
			<Route path="/:rest*" component={NotFoundPage} />
			<Redirect exact to={LINKS.MEDICO_INICIO} from={LINKS.MEDICO_INICIO} />
		</Switch>
	);
}

export default MedicoRoutes;
