import { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
// Components
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  OutlinedInput,
  useMediaQuery,
} from '@material-ui/core';
import Layout from '../components/Layout';

// Icons
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';

// Image
import perroFlower from '../assets/img/perritoFlores.png';
import gatoPensativo from '../assets/img/gatitoPensativo.png';
import { useForm } from '../hooks/useForm';
import { useAuth } from '../context/AuthContext';
import AlertCustom from '../components/AlertCustom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },

  withoutFlexBasis: {
    flexBasis: 'auto',
  },

  loginContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  imgLogin: {
    textAlign: 'center',
    '& > img': {
      margin: '1rem auto',
      maxWidth: '222px',
      maxHeight: '212px',
    },
  },

  imgPageLogin: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '& > img': {
      maxWidth: '400px',
      maxHeight: '400px',
      minWidth: '200px',
    },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  formControl: {
    width: '100%',
  },

  inputLabel: {
    display: 'flex',
    alignItems: 'center',
  },

  btnLogin: {
    width: '100%',
  },
}));

function isValidCredentials(user) {
  const userLogin = {
    username: 'user',
    password: '123',
  };
  if (
    user.username === userLogin.username &&
    user.password === userLogin.password
  ) {
    return true;
  }
}

function LoginPage(props) {
  const { formData, handleChange } = useForm({ username: '', password: '' });
  const { state, handleLogin, handleError } = useAuth();

  const classes = useStyles();

  const isMobileSize = useMediaQuery('(min-width:580px)');

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (isValidCredentials(formData)) {
      handleLogin(formData);
    } else {
      handleError('Error en las credenciales');
    }
  };

  if (state.isLogin) {
    return <Redirect to={props.history.goBack() || '/'} />;
  }

  return (
    <Layout title="Iniciar sesión">
      <div className={classes.root}>
        <Grid container spacing={2}>
          {isMobileSize ? (
            <Grid container item xs={12} direction="row">
              <Grid item xs={6} className={classes.imgPageLogin}>
                <img src={gatoPensativo} alt="Gato Pensativo" />
              </Grid>
              <Grid item xs={6}>
                <div className={classes.imgLogin}>
                  <img src={perroFlower} alt="Perro con flores" />
                </div>
                <Container>
                  <form className={classes.form} onSubmit={handleSubmitLogin}>
                    {state.loading ? (
                      <CircularProgress color="primary" />
                    ) : state.isError ? (
                      <AlertCustom
                        typeAlert="error"
                        variant="outlined"
                        message={state.message}
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
          ) : (
            <Grid container item sm={6} direction="column">
              <Grid item sm={3} className={classes.loginContent}>
                <div className={classes.imgLogin}>
                  <img src={perroFlower} alt="Perro con flores" />
                </div>
                <Container>
                  <form className={classes.form}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel
                        htmlFor="username"
                        className={classes.inputLabel}
                      >
                        <PermIdentityIcon /> <span>Nombre de usuario</span>
                      </InputLabel>
                      <OutlinedInput
                        id="username"
                        aria-describedby="Nombre de usuario"
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
                      size="large"
                      variant="contained"
                    >
                      Ingresar
                    </Button>
                  </form>
                </Container>
                <div className={classes.imgLogin}>
                  <img src={gatoPensativo} alt="Gato Pensativo" />
                </div>
              </Grid>
            </Grid>
          )}
        </Grid>
      </div>
    </Layout>
  );
}

export default LoginPage;
