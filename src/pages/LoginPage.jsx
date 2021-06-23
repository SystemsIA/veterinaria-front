import { Fragment } from 'react';

import { Redirect } from 'react-router-dom';

import * as LINKS from 'routes';
// Components
import {
	Button,
	CircularProgress,
	Container,
	FormControl,
	Grid,
	InputLabel,
	OutlinedInput,
	useMediaQuery,
} from '@material-ui/core';
import AlertCustom from 'components/AlertCustom';
import Layout from 'components/Layout';

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

const u = {
	username: 'user',
	password: '123',
};
const m = {
	username: 'medico',
	password: '123',
};

function isValidCredentials(user) {
	if (user.username === u.username && user.password === u.password) return true;
	else return user.username === m.username && user.password === m.password;
}
const isDoctor = (r) => r === 'medico';

function LoginPage() {
	const { formData, handleChange } = useFormInput({
		username: '',
		password: '',
	});
	const auth = useAuth();
	const isMobileSize = useMediaQuery('(min-width:580px)');
	const classes = useStyles({ isMobileSize });

	const handleSubmitLogin = (e) => {
		e.preventDefault();
		if (isValidCredentials(formData)) {
			let u = {
				token: 'my-token',
				role: isDoctor(formData.username) ? 'medico' : 'user',
				username: formData.username,
				email: 'user@mail.com',
			};
			auth.loginAction(u);
		} else {
			auth.errorAction('Error en las credenciales');
		}
	};

	if (auth.isLogin) {
		return (
			<Redirect
				exact
				from={LINKS.LOGIN}
				to={isDoctor(auth?.user?.role) ? LINKS.MEDICO_INICIO : LINKS.USER}
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
					>
						<Grid
							item
							xs={isMobileSize ? 6 : 9}
							sm={isMobileSize ? 6 : 3}
							className={classes.imgPageLogin}
						>
							<img src={gatoPensativo} alt="Gato Pensativo" />
						</Grid>
						<Grid item xs={isMobileSize ? 6 : 12} sm={isMobileSize ? 6 : 3}>
							<div className={classes.imgLogin}>
								<img src={perroFlower} alt="Perro con flores" />
							</div>
							<Container>
								<form className={classes.form} onSubmit={handleSubmitLogin}>
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
									<FormControl
										variant="outlined"
										className={classes.formControl}
										color="primary"
									>
										<InputLabel
											htmlFor="username-outlined"
											className={classes.inputLabel}
										>
											<PermIdentityIcon /> <span>Nombre de usuario</span>
										</InputLabel>
										<OutlinedInput
											onChange={handleChange}
											id="username-outlined"
											aria-describedby="Nombre de usuario"
											name="username"
											label={
												<Fragment>
													<PermIdentityIcon />
													Nombre de usuario
												</Fragment>
											}
										/>
									</FormControl>

									<FormControl
										variant="outlined"
										color="primary"
										className={classes.formControl}
									>
										<InputLabel
											htmlFor="password"
											className={classes.inputLabel}
										>
											<LockIcon />
											<span>Contraseña de usuario</span>
										</InputLabel>
										<OutlinedInput
											id="password"
											aria-describedby="Contraseña"
											type="password"
											name="password"
											onChange={handleChange}
											autoComplete="false"
											label={
												<Fragment>
													<LockIcon />
													Contraseña de usuario
												</Fragment>
											}
										/>
									</FormControl>
									<Button
										className={classes.btnLogin}
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
