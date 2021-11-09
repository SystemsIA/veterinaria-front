//Components
import LayoutMedico from 'components/medico/LayoutMedico';
import HistoriaForm from 'components/mascota/HistoriaForm';
import TaskTable from 'components/table/TaskTable';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

// Images
import imgMore from 'assets/img/iconMas.png';

function MedicoTareasPage() {
	return (
		<LayoutMedico title='Tareas'>
			<Typography variant='h3' component='h3' align='center' color='primary'>
				Tareas del Doctor
			</Typography>

			<Accordion id='tarea-header'>
				<AccordionSummary
					expandIcon={<img width={40} src={imgMore} alt='Tareas Doctor 2' />}
					aria-controls='tarea-content'
					id='tarea-header'
				>
					<Typography variant='h6'>Crear tareas para una mascota</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<HistoriaForm width='100%' />
				</AccordionDetails>
			</Accordion>
			<br />
			<TaskTable />
		</LayoutMedico>
	);
}

export default MedicoTareasPage;
