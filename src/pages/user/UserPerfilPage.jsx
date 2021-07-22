import useAuth from 'hooks/useAuth';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import LayoutCliente from 'components/cliente/LayoutCliente';
import ButtonLink from 'components/ui/ButtonLink';
import * as LINKS from 'routes';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: '40%',
		padding: theme.spacing(2),
	},
	rowInfo: {
		display: 'flex',

		alignItems: 'center',
		margin: theme.spacing(0.5),
		padding: theme.spacing(0.2),
		'& p': {
			display: 'inline',
		},
		'& span': {
			width: 70,
			color: theme.palette.info.main,
			borderBottom: `2px solid ${theme.palette.primary.light}`,
			padding: theme.spacing(0.6),
			marginRight: 10,
		},
	},
}));

function UserPerfilPage() {
	const auth = useAuth();
	const classes = useStyles();
	return (
		<LayoutCliente title={`${auth.user?.email}`}>
			<Box display='flex' flexDirection='column' alignItems='center'>
				<Typography variant='h4' align='center'>
					Mi Perfil
				</Typography>
				<Typography align='center' variant='h2' color='primary'>
					Bienvenido <br />
					{auth.user?.email}
				</Typography>

				<Paper elevation={2} className={classes.paper}>
					<Box display='flex' flexDirection='column'>
						<div className={classes.rowInfo}>
							<span>Telefono:</span>
							<p>{auth.user?.telefono}</p>
						</div>
						<div className={classes.rowInfo}>
							<span>Direccion:</span>
							<p>{auth.user?.direccion}</p>
						</div>
						<div className={classes.rowInfo}>
							<span>DNI: </span>
							<p>{auth.user?.nombre}</p>
						</div>
						<div className={classes.rowInfo}>
							<span>Email:</span>
							<p>{auth.user?.email}</p>
						</div>
						<div className={classes.rowInfo}>
							<span>Usuario:</span>
							<p>{auth.user?.nombre}</p>
						</div>
					</Box>
				</Paper>
			</Box>
			<br />
			<Box
				className={classes.content}
				display='flex'
				flexDirection='column'
				alignItems='center'
			>
				<ButtonLink
					to={`${LINKS.USER_INICIO}${LINKS.USER_RESET_PASSWORD}`}
					variant='outlined'
					color='secondary'
					text='Cambiar mi contraseña'
				/>
			</Box>
		</LayoutCliente>
	);
}

export default UserPerfilPage;
