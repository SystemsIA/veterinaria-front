import { Grid } from '@material-ui/core';
import CardMascota from 'components/mascota/CardMascota';
import LayoutMedico from 'components/medico/LayoutMedico';

function MedicoMascotasPage() {
	// TODO: Fetch Data

	return (
		<LayoutMedico title="Medico | Mascotas">
			<h1>Mascotas</h1>
			<Grid container spacing={2}>
				{[1, 2, 3].map((item) => (
					<Grid item xs={12} sm={6}>
						<CardMascota key={item} />
					</Grid>
				))}
			</Grid>
		</LayoutMedico>
	);
}

export default MedicoMascotasPage;
