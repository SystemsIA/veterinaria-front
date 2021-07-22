import { useForm } from 'hooks/useFormInput';
import useClient from 'hooks/useClient';
import InputForm from 'components/ui/InputForm';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormLabel,
	makeStyles,
	OutlinedInput,
	Radio,
	RadioGroup,
} from '@material-ui/core';
import ListEspecieSelect from 'components/ui/ListEspecieSelect';
import AlertCustom from 'components/AlertCustom';
import AutocompleteInput from 'components/ui/AutocompleteInput';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
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
			width: '45%',
		},
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 200,
	},
}));

function MascotaForm({ activeListUser, clientId }) {
	const cliente = useClient();
	const classes = useStyles();

	const [valueCliente, setValueCliente] = useState(null);

	const form = useForm({
		nombre: '',
		especie: 0,
		edad: '',
		raza: '',
		color: '',
		alergias: '',
		sexo: '',
		dni: '',
		esterilizado: false,
		entero: false,
		gestacion: false,
		lactancia: false,
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		(async () => {
			await cliente.registrarMascotaAction(
				valueCliente ? valueCliente?.id : clientId,
				form.fields
			);
			clientId || valueCliente?.id
				? await cliente.fetchClientAction(clientId || valueCliente?.id)
				: await cliente.listClientesAction();
		})();
	};

	useEffect(() => {
		(async () => {
			await cliente.listClientesAction();
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			{cliente.isError && (
				<AlertCustom
					typeAlert='error'
					message={cliente.message}
					handle={cliente.resetAction}
				/>
			)}
			{cliente?.isSuccess && (
				<AlertCustom typeAlert='success' handle={cliente.resetAction}>
					{cliente.message}
				</AlertCustom>
			)}
			<InputForm
				as={OutlinedInput}
				label='Nombre de la mascota'
				id='name-mascota'
				idName='nombre'
				required
				{...form.getInput('nombre')}
			/>
			<div className={classes.row}>
				<InputForm
					as={OutlinedInput}
					label='Edad de la mascota'
					id='edad-mascota'
					idName='edad'
					required
					{...form.getInput('edad')}
				/>
				<InputForm
					as={OutlinedInput}
					label='Raza de la mascota'
					id='raza-mascota'
					idName='raza'
					{...form.getInput('raza')}
				/>
			</div>
			<div className={classes.row}>
				<InputForm
					as={OutlinedInput}
					label='Color de la mascota'
					id='color-mascota'
					idName='color'
					{...form.getInput('color')}
				/>
				<InputForm
					as={OutlinedInput}
					label='DNI de la mascota'
					id='dni-mascota'
					idName='dni'
					required
					{...form.getInput('dni')}
				/>
			</div>
			<InputForm
				as={OutlinedInput}
				label='Alergias de la mascota'
				id='alergias-mascota'
				idName='alergias'
				{...form.getInput('alergias')}
			/>
			<div className={classes.row}>
				<FormControl component='fieldset'>
					<FormLabel component='legend'>Sexo de la Mascota</FormLabel>
					<RadioGroup aria-label='sexo'>
						<FormControlLabel
							{...form.getRadio('sexo', 'MACHO')}
							control={<Radio />}
							label='Macho'
						/>
						<FormControlLabel
							{...form.getRadio('sexo', 'HEMBRA')}
							control={<Radio />}
							label='Hembra'
						/>
					</RadioGroup>
				</FormControl>
				<ListEspecieSelect classes={classes} {...form.getSelect('especie')} />
			</div>
			<div className={classes.row}>
				{['esterilizado', 'entero', 'gestacion', 'lactancia'].map(
					(estado, index) => (
						<FormControlLabel
							key={`${estado}-${index}`}
							control={
								<Checkbox {...form.getCheckbox(estado)} color='primary' />
							}
							label={estado.toUpperCase()}
						/>
					)
				)}
			</div>
			{activeListUser && (
				<AutocompleteInput
					field='nombre'
					data={cliente.clientes}
					value={valueCliente}
					setValue={setValueCliente}
					label='Buscar al cliente'
				/>
			)}

			<Button type='submit' variant='contained' color='primary'>
				Registrar
			</Button>
		</form>
	);
}

export default MascotaForm;
