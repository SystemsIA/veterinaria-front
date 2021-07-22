import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from '@material-ui/core';
import ButtonBack from 'components/ui/ButtonBack';
import ArrowBack from 'components/icons/ArrowBack';
import LayoutMedico from 'components/medico/LayoutMedico';
import RegisterUserForm from 'components/medico/RegisterUserForm';
import TableCliente from 'components/table/TableCliente';

// Images
import imgMore from 'assets/img/iconMas.png';

function MedicoClientesPage() {
	return (
		<LayoutMedico title='Cliente'>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<div>
					<Typography variant='h3' component='h3' align='center'>
						Clientes
					</Typography>
				</div>

				<ButtonBack
					variant='outlined'
					startIcon={<ArrowBack />}
					color='primary'
				/>
			</Box>
			<Accordion>
				<AccordionSummary
					expandIcon={<img width={40} src={imgMore} alt='Tareas Doctor 2' />}
					aria-controls='panel2a-content'
					id='panel2a-header'
				>
					<Typography variant='h6'>Registrar nuevo Cliente</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<RegisterUserForm width='100%' />
				</AccordionDetails>
			</Accordion>
			<br />

			<TableCliente />
		</LayoutMedico>
	);
}

export default MedicoClientesPage;
