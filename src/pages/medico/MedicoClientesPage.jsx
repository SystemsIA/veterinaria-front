import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';
import LayoutMedico from 'components/medico/LayoutMedico';
import RegisterUserForm from 'components/medico/RegisterUserForm';

// Images
import imgMore from 'assets/img/iconMas.png';

// TODO: Complete Table List clients
function MedicoClientesPage() {
	return (
		<LayoutMedico title='Cliente'>
			<Typography variant='h3' component='h3' align='center'>
				Clientes
			</Typography>

			<Accordion>
				<AccordionSummary
					expandIcon={<img width={40} src={imgMore} alt='Tareas Doctor 2' />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography variant='h6'>Registrar nuevo Cliente</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<RegisterUserForm width='50%' />
				</AccordionDetails>
			</Accordion>
		</LayoutMedico>
	);
}

export default MedicoClientesPage;
