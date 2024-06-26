// Hooks
import { useState } from 'react';
import { useModalTransition } from 'contexts/ModalTransitionContext';
import { useForm } from 'hooks/useFormInput';
import useClient from 'hooks/useClient';
import useMounted from 'hooks/useMounted';

// Components
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import InputForm from 'components/ui/InputForm';
import ListTareasSelect from 'components/ui/ListTareasSelect';
import AutocompleteInput from 'components/ui/AutocompleteInput';
import AlertCustom from 'components/AlertCustom';

// Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	form: {
		width: (props) => (props.width ? props.width : '70%'),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		'& > *': {
			width: '48%',
		},
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 180,
	},
}));

function HistoriaForm({ mascotaId, width, title = '' }) {
	const cliente = useClient();
	const modal = useModalTransition();
	const classes = useStyles({ width });
	const [valueMascota, setValueMascota] = useState(null);
	const form = useForm({
		description: '',
		talla: '',
		peso: '',
		tarea: 'CITA',
		internado: false,
		temperatura: '',
		pulso: '',
		diagnostico: '',
		examen: '',
		recetaMedica: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			if (!valueMascota?.id) modal.handleClose();
			await cliente.crearHistoriaAction(
				mascotaId || valueMascota?.id,
				form.fields
			);
		})();
	};

	useMounted(async () => {
		await cliente.listMascotaAction();
	});

	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			{title.length !== 0 && (
				<Typography align='center' variant='h6'>
					{title}
				</Typography>
			)}

			{cliente.isError && (
				<AlertCustom
					typeAlert='error'
					message={cliente.message}
					onClick={cliente.resetAction}
				/>
			)}
			{cliente.isSuccess && (
				<AlertCustom
					typeAlert='success'
					message={cliente.message}
					onClick={cliente.resetAction}
				/>
			)}
			<div className={classes.row}>
				<InputForm
					as={OutlinedInput}
					label='Descripción de la mascota'
					id='description-mascota'
					idName='description'
					{...form.getInput('description')}
				/>
				<InputForm
					as={OutlinedInput}
					label='Talla de la mascota'
					id='talla-mascota'
					required
					idName='talla'
					{...form.getInput('talla')}
				/>
			</div>
			<div className={classes.row}>
				<InputForm
					as={OutlinedInput}
					label='Peso de la mascota'
					id='peso-mascota'
					idName='peso'
					required
					{...form.getInput('peso')}
				/>
				<InputForm
					as={OutlinedInput}
					label='Temperatura de la mascota'
					id='temperatura-mascota'
					idName='temperatura'
					{...form.getInput('temperatura')}
				/>
			</div>
			<div className={classes.row}>
				<InputForm
					as={OutlinedInput}
					label='Pulso de la mascota'
					id='pulso-mascota'
					idName='pulso'
					{...form.getInput('pulso')}
				/>
				<InputForm
					as={OutlinedInput}
					label='Exámen de la mascota'
					id='examen-mascota'
					required
					idName='examen'
					{...form.getInput('examen')}
				/>
			</div>

			<div className={classes.row}>
				<InputForm
					as={OutlinedInput}
					label='Receta Médica de la mascota'
					id='recetaMedica-mascota'
					idName='recetaMedica'
					required
					{...form.getInput('recetaMedica')}
				/>
				<ListTareasSelect classes={classes} {...form.getSelect('tarea')} />
			</div>
			<div className={classes.row}>
				<FormControlLabel
					control={
						<Checkbox {...form.getCheckbox('internado')} color='primary' />
					}
					label='Internado'
				/>
			</div>
			<div className={classes.row}>
				<TextareaAutosize
					aria-label='minimum height'
					minRows={3}
					placeholder='Diagnosito de la mascota...'
					{...form.getInput('diagnostico')}
				/>
				<AutocompleteInput
					field='nombre'
					data={cliente?.mascotas}
					value={valueMascota}
					setValue={setValueMascota}
					label='Buscar la mascota'
				/>
			</div>
			<Button type='submit' variant='contained' color='primary'>
				Registrar la tarea
			</Button>
		</form>
	);
}

export default HistoriaForm;
