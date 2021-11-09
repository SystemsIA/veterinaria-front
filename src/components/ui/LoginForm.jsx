// Hooks
import useFormInput from 'hooks/useFormInput';
import { useRegexEmail } from 'hooks/useRegexInput';

// Components
import InputForm from './InputForm';
import AlertCustom from 'components/AlertCustom';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import OutlinedInput from '@material-ui/core/OutlinedInput';

// Icons
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';

// Styles
import useStyles from './LoginForm.styles';

function LoginForm(props) {
	const auth = props.auth;
	const form = useFormInput({
		email: '',
		password: '',
	});
	const emailRegx = useRegexEmail();

	const classes = useStyles();

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		(async () => {
			await auth.loginAction(form.formData);
		})();
	};

	return (
		<form
			autoComplete='off'
			className={classes.form}
			onSubmit={handleLoginSubmit}
			onChange={form.handleChange}
		>
			{auth.isError && (
				<AlertCustom
					typeAlert='error'
					variant='outlined'
					message={auth.message}
					onClick={auth.resetAction}
				/>
			)}

			<InputForm
				as={OutlinedInput}
				onChange={emailRegx.onChange}
				error={!emailRegx.isValid}
				helperText={
					!emailRegx.isValid ? 'Por favor Ingrese un correo válido' : null
				}
				required
				idName='email-outlined'
				type='email'
				name='email'
				icon={PermIdentityIcon}
				label='Correo de usuario'
			/>

			<InputForm
				as={OutlinedInput}
				required
				type='password'
				idName='password-outlined'
				name='password'
				icon={LockIcon}
				label='Contraseña de usuario'
				autoComplete='off'
			/>

			<Button
				color='primary'
				size='large'
				variant='contained'
				type='submit'
				disabled={auth.loading || !emailRegx.isValid}
				className={classes.btn}
			>
				{auth.loading ? (
					<CircularProgress className={classes.loader} size='1.5rem' />
				) : null}
				{auth.loading ? 'Cargando' : 'Ingresar'}
			</Button>
		</form>
	);
}

export default LoginForm;
