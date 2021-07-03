import { Link } from 'react-router-dom';

// Hooks
import useAuth from 'hooks/useAuth';

// Links
import * as LINKS from 'routes';

// Components
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import LayoutCliente from 'components/cliente/LayoutCliente';

function UserInicioPage() {
	const auth = useAuth();
	return (
		<LayoutCliente title='Inicio'>
			<Typography align='center' variant='h2' color='primary'>
				<p>
					Bienvenido <br />
				</p>
				{auth.user?.email}
			</Typography>
			<Link to={`${LINKS.USER_INICIO}${LINKS.USER_PERFIL}`}>
				<Button>Ver mi información</Button>
			</Link>
		</LayoutCliente>
	);
}

export default UserInicioPage;
