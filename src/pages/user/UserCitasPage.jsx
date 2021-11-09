import Typography from '@material-ui/core/Typography';
import LayoutCliente from 'components/cliente/LayoutCliente';

function UserCitasPage() {
	return (
		<LayoutCliente title='Mascotas'>
			<Typography variant='h3' component='h3' align='center'>
				Citas médicas
			</Typography>
		</LayoutCliente>
	);
}

export default UserCitasPage;
