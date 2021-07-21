// Images
import plate from 'assets/img/plato.png';
import FacebookIcon from '@material-ui/icons/Facebook';

import useStyles from './Footer.styles';

function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<div className={classes.content}>
				<div>
					<b>Clínica Veterinaria "San Lorenzo"</b>
					<div className={classes.content}>
						<FacebookIcon />
						<p>@clinicaveterinariasanlorenzo · Veterinario</p>
					</div>
				</div>
				<img src={plate} alt='Plato de perro 😅' title='Plato de perro 😅' />
			</div>
		</footer>
	);
}

export default Footer;
