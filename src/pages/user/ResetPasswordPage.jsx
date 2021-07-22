import useAuth from 'hooks/useAuth';
import { Box, Typography } from '@material-ui/core';
import LayoutCliente from 'components/cliente/LayoutCliente';
import PasswordForm from 'components/cliente/PasswordForm';

function ResetPasswordPage() {
	const auth = useAuth();
	return (
		<LayoutCliente title={`Cambiar Contraseña - ${auth?.user?.nombre}`}>
			<Typography align='center' variant='h2' color='primary'>
				<p>
					Cambiar contraseña <br />
				</p>
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
