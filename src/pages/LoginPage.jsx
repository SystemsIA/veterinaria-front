import {
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';

import Layout from '../components/Layout';

import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
//Image
import perroFlower from '../assets/img/perritoFlores.png';
import gatoPensativo from '../assets/img/gatitoPensativo.png';

const useStyles = makeStyles(() => ({
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
  },

  formControl: {
    width: '100%',
  },

  inputLabel: {
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  btnLogin: {
    fontWeight: 'bold',
    backgroundColor: '#F2D852',
    color: '#383631',
    width: '100%',
    '&:hover': {
      color: '#383631',
    },
  },
}));
function LoginPage() {
  const classes = useStyles();
  const isMobileSize = useMediaQuery('(min-width:580px)');
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
                <form className={classes.form}>
                  <FormControl margin="normal">
                    <InputLabel
                      color="secondary"
                      htmlFor="username"
                      className={classes.inputLabel}
                    >
                      <PermIdentityIcon /> <span>Nombre de usuario</span>
                    </InputLabel>
                    <Input id="username" aria-describedby="Nombre de usuario" />
                  </FormControl>

                  <FormControl margin="normal">
                    <InputLabel
                      htmlFor="password"
                      className={classes.inputLabel}
                    >
                      <LockIcon />
                      <span>Contraseña de usuario</span>
                    </InputLabel>
                    <Input
                      id="password"
                      aria-describedby="Contraseña"
                      type="password"
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
              </Grid>
            </Grid>
          ) : (
            <Grid container item sm={6} direction="column">
              <Grid item sm={3} className={classes.loginContent}>
                <div className={classes.imgLogin}>
                  <img src={perroFlower} alt="Perro con flores" />
                </div>
                <form>
                  <FormControl margin="normal" className={classes.formControl}>
                    <InputLabel
                      color="secondary"
                      htmlFor="username"
                      className={classes.inputLabel}
                    >
                      <PermIdentityIcon /> <span>Nombre de usuario</span>
                    </InputLabel>
                    <Input id="username" aria-describedby="Nombre de usuario" />
                  </FormControl>
                  <FormControl margin="normal" className={classes.formControl}>
                    <InputLabel
                      htmlFor="password"
                      className={classes.inputLabel}
                    >
                      <LockIcon />
                      <span>Contraseña de usuario</span>
                    </InputLabel>
                    <Input
                      id="password"
                      aria-describedby="Contraseña"
                      type="password"
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
