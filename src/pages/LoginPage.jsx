import { Redirect } from 'react-router-dom';

import * as LINKS from 'routes';
// Components
import InputForm from 'components/ui/InputForm';
import AlertCustom from 'components/AlertCustom';
import Layout from 'components/Layout';
import {
	Button,
	CircularProgress,
	Container,
	Grid,
	OutlinedInput,
	useMediaQuery,
} from '@material-ui/core';

// Icons
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';

// Hooks
import useFormInput from 'hooks/useFormInput';
import useAuth from 'hooks/useAuth';

// Styles
import useStyles from './LoginPage.styles';

// Images
import perroFlower from 'assets/img/perritoFlores.png';
import gatoPensativo from 'assets/img/gatitoPensativo.png';

const isDoctor = (r) => r !== 'CLIENTE';

function LoginPage() {
	const { formData, handleChange } = useFormInput({
		email: '',
		password: '',
	});
	const auth = useAuth();
	const isNotMobileSize = useMediaQuery('(min-width:580px)');
	const classes = useStyles();

	const handleSubmitLogin = (e) => {
		e.preventDefault();
		auth.loginAction(formData);
		if (auth?.isLogin) window.location.reload();
	};

	if (auth.isLogin) {
		return (
			<Redirect
				exact
				from={LINKS.LOGIN}
				to={
					isDoctor(auth.user?.tipoUsuario)
						? LINKS.MEDICO_INICIO
						: LINKS.USER_HOME
				}
			/>
		);
	}

	return (
		<Layout title="Iniciar sesión">
			<div className={classes.root}>
				<Grid
					container
					item
					xs={12}
					sm={isNotMobileSize ? 12 : 6}
					direction={isNotMobileSize ? 'row' : 'column-reverse'}
					justify="center"
				>
					<Grid
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
						className={classes.loginContent}
					>
						<img src={gatoPensativo} alt="Gato Pensativo" />
					</Grid>
					<Grid
						className={classes.loginContent}
						item
						xs={isNotMobileSize ? 12 : 6}
						sm={isNotMobileSize ? 6 : 3}
					>
						<img src={perroFlower} alt="Perro con flores" />

						<Container>
							<form
								autoComplete="off"
								className={classes.form}
								onSubmit={handleSubmitLogin}
								onChange={handleChange}
							>
								{auth.isError ? (
									<AlertCustom
										typeAlert="error"
										variant="outlined"
										message={auth.message}
										handler={auth.resetAction}
									/>
								) : null}

								<InputForm
									as={OutlinedInput}
									required
									idName="email-outlined"
									type="email"
									name="email"
									icon={PermIdentityIcon}
									label="Correo de usuario"
								/>

								<InputForm
									as={OutlinedInput}
									required
									type="password"
									idName="password-outlined"
									name="password"
									icon={LockIcon}
									label="Contraseña de usuario"
									autoComplete="off"
								/>

								<Button
									color="primary"
									size="large"
									variant="contained"
									type="submit"
									disabled={auth.loading}
								>
									{auth.loading ? <CircularProgress size="1.5rem" /> : null}
									Ingresar
								</Button>
							</form>
						</Container>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default LoginPage;
