import { Box, Grid, Typography } from '@material-ui/core';
import LayoutMedico from 'components/medico/LayoutMedico';
import CardHistorialMascota from 'components/mascota/CardHistorialMascota';
import ArrowBack from 'components/icons/ArrowBack';
import ButtonBack from 'components/ui/ButtonBack';

function MascotaHistorialPage(props) {
	// TODO: Fetch Data a History
	return (
		<LayoutMedico container>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<Typography variant='h3' component='h3' color='textPrimary'>
					{props.mascota.nameMascota}
				</Typography>
				<ButtonBack
					variant='outlined'
					startIcon={<ArrowBack />}
					color='primary'
				/>
			</Box>

			<Grid container spacing={2}>
				{[1, 2, 3, 4].map((item) => (
					<Grid key={item} item xs={12} sm={6}>
						<CardHistorialMascota />
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
