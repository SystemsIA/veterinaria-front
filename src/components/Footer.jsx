import { makeStyles } from '@material-ui/core';

// Images
import phone from '../assets/img/imag6.png';
import plate from '../assets/img/plato.png';

const useStyles = makeStyles(() => ({
  footer: {
    display: 'block',

    bottom: '0',
    '& > *': {
      padding: '0.5rem 2rem',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& img': {
      maxWidth: 50,
      maxHeight: 50,
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <img src={phone} alt="Teléfono para atenciones" />
        <img src={plate} alt="Plato de perro 😅" />
      </div>
    </footer>
  );
}
export default Footer;
