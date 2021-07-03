import { memo, useReducer, useCallback } from 'react';

// Hooks
import useFormInput from 'hooks/useFormInput';
import useClient from 'hooks/useClient';

// Components
import { Box, TextField, Button } from '@material-ui/core';
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
			let phone = validNumberInput(action.phone, false);
			return {
				...state,
				isValidDNI: dni,
				isValidPhone: phone,
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
	const client = useClient();
	const classes = useStyles({ width });
	const [state, dispatch] = useReducer(reducer, initState);

	const { formData, handleChange } = useFormInput({
		name: '',
		dni: '',
		address: '',
		phone: '',
	});

	const handleRegisterSubmit = useCallback(
		(e) => {
			e.preventDefault();
			dispatch({
				type: 'valid',
				dni: formData.dni,
				phone: formData.phone,
			});

			if (state.isValidDNI && state.isValidPhone) {
				client.registerAction(formData);
			} else {
				console.log('Invalid');
			}
		},
		[formData, state, client]
	);

	return (
		<form
			onChange={handleChange}
			onSubmit={handleRegisterSubmit}
			className={classes.form}
		>
			<Box display='flex' flexDirection='column' justifyContent='space-between'>
				{client.isError ? (
					<AlertCustom
						typeAlert='error'
						message={client.message}
						handle={client.resetAction}
					/>
				) : null}
				<TextField
					required
					id='name-user'
					name='name'
					label='Nombre del cliente'
					variant='outlined'
					className={classes.textField}
				/>
				<TextField
					required
					error={!state.isValidDNI}
					// onChange={() => dispatch({ type: 'reset-dni' })}
					id='dni-user'
					name='dni'
					maxlenght={8}
					label='DNI del cliente'
					variant='outlined'
					helperText={
						!state.isValidDNI ? 'Por favor el corriga el número de DNI.' : null
					}
					className={classes.textField}
				/>

				<TextField
					required
					id='address-user'
					name='address'
					label='Dirección del cliente'
					variant='outlined'
					className={classes.textField}
				/>
				<TextField
					required
					error={!state.isValidPhone}
					// onChange={() => dispatch({ type: 'reset-phone' })}
					id='phone-user'
					name='phone'
					label='Teléfono del cliente'
					variant='outlined'
					helperText={
						!state.isValidPhone
							? 'Por favor el corriga el número de teléfono.'
							: null
					}
					className={classes.textField}
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
