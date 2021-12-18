// Hooks
import useAuth from 'hooks/useAuth';

// Components
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LayoutCliente from 'components/cliente/LayoutCliente';
import PasswordForm from 'components/cliente/PasswordForm';

function ResetPasswordPage() {
	const auth = useAuth();
	return (
		<LayoutCliente title={`Cambiar Contraseña - ${auth?.user?.nombre}`}>
			<Typography align='center' variant='h4' color='primary'>
				Cambiar contraseña
			</Typography>
			<Typography align='center' variant='h3'>
				{auth?.user?.nombre}-{auth.user?.email}
			</Typography>

			<br />
			<Box display='flex' flexDirection='column'>
				<PasswordForm />
			</Box>
		</LayoutCliente>
	);
}

export default ResetPasswordPage;
