// Hooks
import useAuth from 'hooks/useAuth';

// Links
import * as LINKS from 'routes';

// Components
import { Box, makeStyles, Typography } from '@material-ui/core';
import LayoutCliente from 'components/cliente/LayoutCliente';
import ButtonLink from 'components/ui/ButtonLink';

const useStyles = makeStyles((theme) => ({
	content: {
		width: '100%',
		'& > *': {
			margin: theme.spacing(2),
		},
	},
}));

function UserInicioPage() {
	const classes = useStyles();
	const auth = useAuth();
	return (
		<LayoutCliente title='Inicio'>
			<Typography align='center' variant='h2' color='primary'>
				<p>
					Bienvenido <br />
				</p>
				{auth.user?.email}
			</Typography>
			<Box
				className={classes.content}
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<ButtonLink
					to={`${LINKS.USER_INICIO}${LINKS.USER_PERFIL}`}
					text='Ver mi información'
					variant='contained'
				/>

				<ButtonLink
					to={`${LINKS.USER_INICIO}${LINKS.USER_RESET_PASSWORD}`}
					variant='outlined'
					color='secondary'
					text='Cambiar contraseña'
				/>
			</Box>
		</LayoutCliente>
	);
}

export default UserInicioPage;
