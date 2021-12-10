import { Redirect } from 'react-router-dom';
import * as LINKS from 'routes';

// Hooks
import useAuth from 'hooks/useAuth';

// Components
import Layout from 'components/Layout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Styles
import useStyles from './LoginPage.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// Images
// import perroFlower from 'assets/img/perritoFlores.png';
// import gatoPensativo from 'assets/img/gatitoPensativo.png';
import LoginForm from 'components/ui/LoginForm';

function LoginPage() {
	const auth = useAuth();
	const isNotMobileSize = useMediaQuery('(min-width:580px)');
	const classes = useStyles({ isMinSize: isNotMobileSize });

	if (auth.isLogin) {
		return (
			<Redirect
				exact
				from={LINKS.LOGIN}
				to={
					auth.user?.isDoctor
						? LINKS.MEDICO_INICIO
						: LINKS.USER_INICIO + '/inicio'
				}
			/>
		);
	}

	return (
		<Layout title='Iniciar sesión'>
			<div className={classes.root}>
				<Grid
					container
					item
					xs={12}
					sm={isNotMobileSize ? 12 : 6}
					direction={isNotMobileSize ? 'row' : 'column-reverse'}
					justifyContent='center'
				>
					<Grid
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
						className={classes.loginPage}
					>
						<img
							src='https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
							alt='Gato Pensativo'
						/>
					</Grid>
					<Grid
						className={classes.loginContent}
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
					>
						<Container>
							<Typography
								variant='h2'
								component='h2'
								align={isNotMobileSize ? 'left' : 'center'}
							>
								Iniciar Sesión
							</Typography>
							<LoginForm auth={auth} />
						</Container>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default LoginPage;
