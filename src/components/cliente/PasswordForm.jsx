import {
	Box,
	Button,
	CircularProgress,
	makeStyles,
	OutlinedInput,
} from '@material-ui/core';
import AlertCustom from 'components/AlertCustom';
import InputForm from 'components/ui/InputForm';
import useClient from 'hooks/useClient';
import { useForm } from 'hooks/useFormInput';

const useStyles = makeStyles((theme) => ({
	fields: {
		'& > *': {
			margin: theme.spacing(2),
			width: '50%',
		},
	},
	loader: {
		position: 'absolute',
		top: '30%',
		left: '48%',
	},
}));

function PasswordForm() {
	const cliente = useClient();
	const classes = useStyles();
	const form = useForm({
		password1: '',
		password2: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			await cliente.cambioPasswordAction(form.fields);
		})();
		form.resetValues(e);
	};

	return (
		<form onSubmit={handleSubmit}>
			<Box
				className={classes.fields}
				display='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='space-between'
			>
				{cliente.isError ? (
					<AlertCustom
						typeAlert='error'
						message={cliente.message}
						handle={cliente.resetAction}
					/>
				) : null}
				{cliente.isSuccess ? (
					<AlertCustom
						typeAlert='success'
						message={cliente.message}
						handle={cliente.resetAction}
					/>
				) : null}

				<InputForm
					as={OutlinedInput}
					label='Nueva contraseña'
					id='password1-user'
					idName='password1'
					color='secondary'
					type='password'
					required
					fontSize={20}
					{...form.getInput('password1')}
				/>
				<InputForm
					as={OutlinedInput}
					label='Repetir la nueva contraseña'
					id='password2-user'
					idName='password2'
					color='secondary'
					type='password'
					required
					fontSize={20}
					{...form.getInput('password2')}
				/>
				<Button type='submit' color='secondary' variant='outlined'>
					{cliente.loading ? (
						<CircularProgress
							color='secondary'
							className={classes.loader}
							size='1.5rem'
						/>
					) : null}
					{cliente.loading ? 'Cargando' : 'Cambiar mi contraseña'}
				</Button>
			</Box>
		</form>
	);
}

export default PasswordForm;
