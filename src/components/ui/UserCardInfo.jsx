import { useCallback, forwardRef } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import useAuth from 'hooks/useAuth';

import * as LINKS from 'routes';

// Components
import { Box, Button, Card, CardContent, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';

// Images
import imgPerroFlores from 'assets/img/perritoFlores.png';

// Styles
import useStyles from './UserCardInfo.styles';

const UserCardInfo = forwardRef(({ handleClose }, ref) => {
	const auth = useAuth();
	const classes = useStyles();
	const handleLogoutAction = useCallback(() => {
		handleClose?.();
		auth.logoutAction();
	}, [auth, handleClose]);

	return (
		<Card className={classes.root} ref={ref}>
			<CardContent>
				<Container>
					<Box display='flex' alignItems='center' flexDirection='column'>
						<div>
							<img src={imgPerroFlores} alt={auth?.user?.email} />
						</div>
						<Typography align='center'>{auth?.user?.email}</Typography>
						{auth?.user?.isDoctor ? (
							<Link
								className={classes.linkBtn}
								to={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_TAREAS}`}
							>
								<Button color='primary'>Revisar tareas</Button>
							</Link>
						) : null}
					</Box>
				</Container>
				<Box
					className={classes.content}
					display='flex'
					justifyContent='space-between'
				>
					<Link
						className={classes.linkBtn}
						to={`${LINKS.USER_INICIO}${LINKS.USER_PERFIL}`}
					>
						<Button variant='contained' color='primary'>
							Mi Perfil
						</Button>
					</Link>
					<Button
						onClick={handleLogoutAction}
						color='secondary'
						variant='contained'
					>
						Cerrar Sesión
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
});

export default UserCardInfo;
