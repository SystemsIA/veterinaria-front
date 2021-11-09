// Hooks
import useClient from 'hooks/useClient';
import useAuth from 'hooks/useAuth';
import useMounted from 'hooks/useMounted';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LayoutCliente from 'components/cliente/LayoutCliente';
import CardMascota from 'components/mascota/CardMascota';

function UserMascotasPage() {
	const auth = useAuth();
	const cliente = useClient();

	useMounted(async () => {
		await cliente.fetchClientAction(auth.user?.id);
	});

	return (
		<LayoutCliente title='Mis Masctoas'>
			<Typography variant='h3' component='h3' align='center'>
				Mis Mascotas
			</Typography>
			<Grid container spacing={2}>
				{cliente?.c?.mascotas.map((mascota) => (
					<Grid key={`masc-${mascota.id}`} item xs={12} sm={6}>
						<CardMascota dataMascota={mascota} />
					</Grid>
				))}
			</Grid>
		</LayoutCliente>
	);
}

export default UserMascotasPage;
