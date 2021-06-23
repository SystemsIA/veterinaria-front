import { makeStyles } from '@material-ui/core/styles';
//Components
import LayoutMedico from 'components/medico/LayoutMedico';
import RegisterUserForm from 'components/medico/RegisterUserForm';
import TaskTable from 'components/TaskTable';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from '@material-ui/core';

// Images
import imgMore from 'assets/img/iconMas.png';

const useStyles = makeStyles((theme) => ({
	imgSize: {
		'& img': {
			maxWidth: 40,
			minWidth: 15,
		},
	},
}));

function MedicoTaskPage() {
	const classes = useStyles();

	return (
		<LayoutMedico title="Tareas">
			<Accordion>
				<AccordionSummary
					aria-controls="view-task"
					id="view-task"
					expandIcon={
						<Button color="primary" className={classes.imgSize}>
							<img src={imgMore} alt="Tareas Doctor" />
						</Button>
					}
				>
					<Typography variant="h6">
						Buen Día Doctor <br /> Estas son sus tareas pendientes
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<TaskTable />
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					aria-controls="create-task"
					id="create-task"
					expandIcon={
						<Button color="primary" className={classes.imgSize}>
							<img src={imgMore} alt="Tareas Doctor" />
						</Button>
					}
				>
					<Typography variant="h6">Crear tareas</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<RegisterUserForm />
				</AccordionDetails>
			</Accordion>
		</LayoutMedico>
	);
}

export default MedicoTaskPage;
