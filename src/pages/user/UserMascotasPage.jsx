import { Grid, Typography } from '@material-ui/core';
import LayoutCliente from 'components/cliente/LayoutCliente';
import CardMascota from 'components/mascota/CardMascota';

function UserMascotasPage() {
	return (
		<LayoutCliente title='Mis Masctoas'>
			<Typography variant='h3' component='h3' align='center'>
				Mis Mascotas
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<CardMascota />
				</Grid>
			</Grid>
		</LayoutCliente>
	);
}

export default UserMascotasPage;
