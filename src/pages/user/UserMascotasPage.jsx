import { useEffect } from 'react';
import useClient from 'hooks/useClient';
import { Grid, Typography } from '@material-ui/core';
import LayoutCliente from 'components/cliente/LayoutCliente';
import CardMascota from 'components/mascota/CardMascota';
import useAuth from 'hooks/useAuth';

function UserMascotasPage() {
	const auth = useAuth();
	const cliente = useClient();
	useEffect(() => {
		cliente.fetchClientAction(auth.user?.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
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
