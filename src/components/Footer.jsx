// Images
import phone from 'assets/img/imag6.png';
import plate from 'assets/img/plato.png';

import useStyles from './Footer.styles';

function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<div className={classes.content}>
				<img
					src={phone}
					alt='Teléfono para atenciones'
					title='Teléfono para atenciones'
				/>
				<img src={plate} alt='Plato de perro 😅' title='Plato de perro 😅' />
			</div>
		</footer>
	);
}

export default Footer;
