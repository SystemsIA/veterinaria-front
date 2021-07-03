import { Typography } from '@material-ui/core';
import LayoutMedico from 'components/medico/LayoutMedico';

// TODO: Complete UI calendar
function MedicoCitasPage() {
	return (
		<LayoutMedico title='Citas'>
			<Typography variant='h3' component='h3' color='secondary' align='center'>
				Calendario de todas las citas
			</Typography>
		</LayoutMedico>
	);
}

export default MedicoCitasPage;
