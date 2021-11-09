import { memo, useCallback, useReducer } from 'react';

// Hooks
import useFormInput from 'hooks/useFormInput';
import useClient from 'hooks/useClient';
import { useRegexEmail } from 'hooks/useRegexInput';

// Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputForm from 'components/ui/InputForm';
import AlertCustom from 'components/AlertCustom';

// Styles
import useStyles from './RegisterUserForm.styles';

const validNumberInput = (text = '', validDNI = true) => {
	const dniRgx = /^\d{8}$/;
	const telefonoRgx = /^[7-9]\d{8}$/;
	if (validDNI) return dniRgx.test(text);
	return telefonoRgx.test(text);
};
const initState = {
	isValidDNI: true,
	isValidPhone: true,
};

function reducer(state = initState, action) {
	switch (action.type) {
		case 'valid':
			let dni = validNumberInput(action.dni);
			let telefono = validNumberInput(action.telefono, false);
			return {
				...state,
				isValidDNI: dni,
				isValidPhone: telefono,
			};
		case 'reset-phone':
			return {
				...state,
				isValidPhone: false,
			};
		case 'reset-dni':
			return {
				...state,
				isValidDNI: false,
			};
		default:
			return state;
	}
}

function RegisterUserForm({ width }) {
	const cliente = useClient();
	const classes = useStyles({ width });
	const [state, dispatch] = useReducer(reducer, initState);

	const emailRegx = useRegexEmail();
	const { formData, handleChange } = useFormInput({
		nombre: '',
		dni: '',
		email: '',
		direccion: '',
		telefono: '',
	});

	const handleRegisterSubmit = useCallback(
		(e) => {
			e.preventDefault();
			dispatch({
				type: 'valid',
				dni: formData.dni,
				telefono: formData.telefono,
			});

			if (state.isValidDNI && state.isValidPhone) {
				cliente.registerAction(formData);
			} else {
				console.log('Invalid');
			}
		},
		[formData, state, cliente]
	);

	return (
		<form
			onChange={handleChange}
			onSubmit={handleRegisterSubmit}
			className={classes.form}
		>
			<Box
				className={classes.content}
				display='flex'
				flexDirection='column'
				justifyContent='space-between'
			>
				{cliente.isError ? (
					<AlertCustom
						typeAlert='error'
						message={cliente.message}
						onClick={cliente.resetAction}
					/>
				) : null}
				{cliente?.isSuccess ? (
					<AlertCustom typeAlert='success' onClick={cliente.resetAction}>
						{cliente.message}
					</AlertCustom>
				) : null}

				<InputForm
					as={OutlinedInput}
					label='Nombre del cliente'
					name='nombre'
					id='name-user'
					idName='name'
					required
				/>
				<InputForm
					as={OutlinedInput}
					label='Correo del cliente'
					name='email'
					id='email-user'
					idName='email'
					type='email'
					onChange={emailRegx.onChange}
					error={!emailRegx.isValid}
					helperText={
						!emailRegx.isValid ? 'Por favor Ingrese un correo válido' : null
					}
					required
				/>
				<InputForm
					as={OutlinedInput}
					label='Dni del cliente'
					name='dni'
					id='dni-user'
					idName='dni'
					required
					helperText={
						!state.isValidDNI ? 'Por favor el corriga el número de DNI.' : null
					}
				/>

				<InputForm
					as={OutlinedInput}
					label='Dirección del cliente'
					name='direccion'
					id='address-user'
					idName='address'
					required
				/>

				<InputForm
					as={OutlinedInput}
					label='Teléfono del cliente'
					name='telefono'
					id='phone-user'
					idName='phone'
					required
					helperText={
						!state.isValidPhone
							? 'Por favor el corriga el número de teléfono.'
							: null
					}
				/>
				<Box display='flex' justifyContent='space-between'>
					<Button
						className={classes.btnSubmit}
						type='submit'
						color='primary'
						variant='contained'
					>
						Registrar cliente
					</Button>
					<Button type='reset' className={classes.btnSubmit} color='secondary'>
						Limpiar
					</Button>
				</Box>
			</Box>
		</form>
	);
}

export default memo(RegisterUserForm);
