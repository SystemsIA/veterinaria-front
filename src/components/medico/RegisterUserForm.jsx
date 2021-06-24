import { Box, TextField, makeStyles, Button } from '@material-ui/core';
import useFormInput from 'hooks/useFormInput';

const useStyles = makeStyles((theme) => ({
	textField: {
		margin: theme.spacing(1),
	},

	btnSubmit: {
		margin: theme.spacing(1),
	},

	form: {
		width: (props) => (props.width ? props.width : '45%'),
	},
}));

function RegisterUserForm({ width }) {
	const classes = useStyles({ width });

	const { formData, handleChange } = useFormInput({
		name: '',
		dni: '',
		address: '',
		phone: '',
	});

	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form
			onChange={handleChange}
			onSubmit={handleRegisterSubmit}
			className={classes.form}
		>
			<Box display="flex" flexDirection="column" justifyContent="space-between">
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

				<div>
					<Button
						className={classes.btnSubmit}
						type="submit"
						color="primary"
						variant="contained"
					>
						Registrar cliente
					</Button>
					<Button type="reset" className={classes.btnSubmit} color="secondary">
						Limpiar
					</Button>
				</div>
			</Box>
		</form>
	);
}

export default RegisterUserForm;
