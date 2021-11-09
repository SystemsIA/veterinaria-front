import Layout from 'components/Layout';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBack from 'components/ui/ButtonBack';

function UnauthorizedPage() {
	return (
		<Layout title='No Autorizado'>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Typography variant='h2' align='center'>
					No esta autorizado para ingresar a este sitio
				</Typography>

				<ButtonBack color='secondary' variant='contained' />
			</Box>
		</Layout>
	);
}

export default UnauthorizedPage;
