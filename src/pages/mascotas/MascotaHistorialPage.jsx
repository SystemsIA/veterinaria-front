import { Grid } from '@material-ui/core';
import CardHistorialMascota from 'components/mascota/CardHistorialMascota';
import LayoutMedico from 'components/medico/LayoutMedico';

function MascotaHistorialPage(props) {
	let params = props.match.params;
	// TODO: Fetch Data a History
	console.log(params);
	return (
		<LayoutMedico>
			<h1>Historial mascota</h1>

			<Grid container spacing={2}>
				{[1, 2, 3, 4].map((item) => (
					<Grid item xs={12} sm={6}>
						<CardHistorialMascota key={item} />
					</Grid>
				))}
			</Grid>
		</LayoutMedico>
	);
}

export default MascotaHistorialPage;
