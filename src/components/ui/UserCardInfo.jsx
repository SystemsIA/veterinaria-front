import { forwardRef, useCallback } from 'react';

// Hooks
import useAuth from 'hooks/useAuth';

import * as LINKS from 'routes';

// Components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonLink from './ButtonLink';

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
						{auth?.user?.isDoctor && (
							<ButtonLink
								className={classes.linkBtn}
								color='primary'
								variant='contained'
								to={`${LINKS.MEDICO_INICIO}${LINKS.MEDICO_TAREAS}`}
								text='Revisar tareas'
							/>
						)}
					</Box>
				</Container>
				<Container>
					<Box
						className={classes.content}
						display='flex'
						justifyContent='space-between'
					>
						<ButtonLink
							className={classes.linkBtn}
							to={`${LINKS.USER_INICIO}${LINKS.USER_PERFIL}`}
							variant='contained'
							color='primary'
							text='Mi Perfil'
						/>
						<Button
							className={classes.linkBtn}
							onClick={handleLogoutAction}
							color='secondary'
							variant='contained'
						>
							Cerrar Sesión
						</Button>
					</Box>
				</Container>
			</CardContent>
		</Card>
	);
});

export default UserCardInfo;
