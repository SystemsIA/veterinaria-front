import Layout from 'components/Layout';
import { Box, Typography } from '@material-ui/core';
import ButtonBack from 'components/ui/ButtonBack';

function ForbiddenPage() {
	return (
		<Layout title="Prohibido">
			<Box display="flex" flexDirection="column" alignItems="center">
				<Typography variant="h2" color="secondary" align="center">
					Usted no cuenta con los permisos necesarios para poder ingresar a esta
					dirección
				</Typography>
				<ButtonBack color="secondary" variant="contained" />
			</Box>
		</Layout>
	);
}

export default ForbiddenPage;
