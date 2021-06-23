import { Box, TextField, makeStyles, Button } from '@material-ui/core';
import useFormInput from 'hooks/useFormInput';

const useStyles = makeStyles((theme) => ({
	textField: {
		margin: theme.spacing(2),
	},

	btnSubmit: {
		margin: theme.spacing(2),
	},
}));

function RegisterUserForm() {
	const classes = useStyles();

	const { formData, handleChange } = useFormInput({
		name: '',
		dni: '',
		address: '',
		phone: '',
	});

	console.log(formData);

	return (
		<form onChange={handleChange}>
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<TextField
					id="name-user"
					name="name"
					label="Nombre del cliente"
					variant="outlined"
					color="secondary"
					className={classes.textField}
				/>
				<TextField
					id="dni-user"
					name="dni"
					label="DNI del cliente"
					variant="outlined"
					color="secondary"
					className={classes.textField}
				/>
				<TextField
					id="address-user"
					name="address"
					label="Dirección del cliente"
					variant="outlined"
					color="secondary"
					className={classes.textField}
				/>
				<TextField
					id="phone-user"
					name="phone"
					label="Teléfono del cliente"
					variant="outlined"
					color="secondary"
					className={classes.textField}
				/>

				<Button
					className={classes.btnSubmit}
					type="submit"
					color="primary"
					variant="contained"
				>
					Registrar cliente
				</Button>
			</Box>
		</form>
	);
}

export default RegisterUserForm;
