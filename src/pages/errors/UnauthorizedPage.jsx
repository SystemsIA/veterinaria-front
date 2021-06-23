import Layout from 'components/Layout';
import { Box, Typography } from '@material-ui/core';
import ButtonBack from 'components/ButtonBack';

function UnauthorizedPage() {
	return (
		<Layout title="No Autorizado">
			<Box display="flex" flexDirection="column" alignItems="center">
				<Typography variant="h2" align="center">
					No esta autorizado para ingresar a este sitio
				</Typography>

				<ButtonBack />
			</Box>
		</Layout>
	);
}

export default UnauthorizedPage;
