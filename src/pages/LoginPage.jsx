import { Redirect } from 'react-router-dom';
import * as LINKS from 'routes';

// Hooks
import useAuth from 'hooks/useAuth';

// Components
import Layout from 'components/Layout';
import { Container, Grid, useMediaQuery } from '@material-ui/core';

// Styles
import useStyles from './LoginPage.styles';

// Images
import perroFlower from 'assets/img/perritoFlores.png';
import gatoPensativo from 'assets/img/gatitoPensativo.png';
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
					justify='center'
				>
					<Grid
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
						className={classes.loginPage}
					>
						<img src={gatoPensativo} alt='Gato Pensativo' />
					</Grid>
					<Grid
						className={classes.loginContent}
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
					>
						<img src={perroFlower} alt='Perro con flores' />

						<Container>
							<LoginForm auth={auth} />
						</Container>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default LoginPage;
