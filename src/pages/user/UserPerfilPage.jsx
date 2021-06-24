import useAuth from 'hooks/useAuth';
import Layout from 'components/Layout';

import { Typography } from '@material-ui/core';

function UserPerfilPage() {
	const auth = useAuth();

	return (
		<Layout title={`Mi Perfil | ${auth.user?.email}`}>
			<Typography variant="h4" align="center">
				Mi Perfil
			</Typography>
			<Typography align="center" variant="h2" color="primary">
				Bienvenido <br />
				{auth.user?.email}
			</Typography>
		</Layout>
	);
}

export default UserPerfilPage;
