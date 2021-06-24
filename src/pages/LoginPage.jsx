import { Redirect } from 'react-router-dom';

import * as LINKS from 'routes';
// Components
import InputForm from 'components/InputForm';
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
	const isMobileSize = useMediaQuery('(min-width:580px)');
	const classes = useStyles({ isMobileSize });

	const handleSubmitLogin = (e) => {
		e.preventDefault();

		auth.loginAction(formData);
	};

	if (auth.isLogin) {
		return (
			<Redirect
				exact
				from={LINKS.LOGIN}
				to={isDoctor(auth.user?.tipoUsuario) ? LINKS.MEDICO_INICIO : LINKS.USER}
			/>
		);
	}

	return (
		<Layout title="Iniciar sesión">
			<div className={classes.root}>
				<Grid container spacing={2}>
					<Grid
						container
						item
						xs={12}
						sm={isMobileSize ? 12 : 6}
						direction={isMobileSize ? 'row' : 'column'}
						justify="center"
					>
						<Grid
							item
							xs={isMobileSize ? 6 : 9}
							sm={isMobileSize ? 6 : 3}
							className={classes.imgPageLogin}
						>
							<img src={gatoPensativo} alt="Gato Pensativo" />
						</Grid>
						<Grid
							item
							xs={isMobileSize ? 6 : 12}
							md={isMobileSize ? 6 : 12}
							sm={isMobileSize ? 6 : 3}
						>
							<div className={classes.imgLogin}>
								<img src={perroFlower} alt="Perro con flores" />
							</div>
							<Container>
								<form
									autoComplete="off"
									className={classes.form}
									onChange={handleChange}
									onSubmit={handleSubmitLogin}
								>
									{auth.loading ? (
										<CircularProgress color="primary" />
									) : auth.isError ? (
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
									/>

									<Button
										color="primary"
										size="large"
										variant="contained"
										type="submit"
									>
										Ingresar
									</Button>
								</form>
							</Container>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</Layout>
	);
}

export default LoginPage;
