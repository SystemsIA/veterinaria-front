import { Box, Grid, Typography } from '@material-ui/core';
import LayoutMedico from 'components/medico/LayoutMedico';
import CardHistorialMascota from 'components/mascota/CardHistorialMascota';
import ArrowBack from 'components/icons/ArrowBack';
import ButtonBack from 'components/ui/ButtonBack';

// Hook
import useClient from 'hooks/useClient';
import useMounted from 'hooks/useMounted';

function MascotaHistorialPage(props) {
	let { idMascota } = props.match.params;

	const cliente = useClient();

	useMounted(async () => {
		await cliente.mascotaHistorialAction(idMascota);
	});

	return (
		<LayoutMedico container title='Historial'>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<div>
					<Typography variant='h3' component='h3'>
						Historial de
					</Typography>
					<Typography variant='h4' color='primary'>
						{props.mascota.nameMascota}
					</Typography>
				</div>

				<ButtonBack
					variant='outlined'
					startIcon={<ArrowBack />}
					color='primary'
				/>
			</Box>

			<Grid container spacing={2}>
				{cliente.historial.map((historia, index) => (
					<Grid key={`hist-${index}`} item xs={12} sm={6}>
						<CardHistorialMascota dataMascota={historia} />
					</Grid>
				))}
			</Grid>
		</LayoutMedico>
	);
}

MascotaHistorialPage.defaultProps = {
	mascota: {
		nameMascota: `Mascota ${Math.floor(Math.random() * 100)}`,
	},
};

export default MascotaHistorialPage;
