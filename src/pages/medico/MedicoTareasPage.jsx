//Components
import LayoutMedico from 'components/medico/LayoutMedico';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';

// Images
import imgMore from 'assets/img/iconMas.png';
import HistoriaForm from 'components/mascota/HistoriaForm';

function MedicoTareasPage() {
	return (
		<LayoutMedico title='Tareas'>
			<Typography variant='h3' component='h3' align='center' color='primary'>
				Tareas del Doctor
			</Typography>
			<Accordion id='panel1a-header'>
				<AccordionSummary
					expandIcon={<img width={40} src={imgMore} alt='Tareas Doctor 1' />}
					aria-controls='panel1a-content'
					id='panel1a-header'
				>
					<Typography variant='h6'>
						Buen Día Doctor <br /> Estas son sus tareas pendientes
					</Typography>
				</AccordionSummary>
				<AccordionDetails></AccordionDetails>
			</Accordion>
			<Accordion id='tarea-header'>
				<AccordionSummary
					expandIcon={<img width={40} src={imgMore} alt='Tareas Doctor 2' />}
					aria-controls='tarea-content'
					id='tarea-header'
				>
					<Typography variant='h6'>Crear tareas para una mascota</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<HistoriaForm />
				</AccordionDetails>
			</Accordion>
		</LayoutMedico>
	);
}

export default MedicoTareasPage;
