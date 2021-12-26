import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import logoApp from 'assets/img/logo-w.png';

// Styles
import useStyles from './AppLogoLink.styles';

function AppLogoLink({ small = false, to, nameLink = '', children }) {
	const classes = useStyles({ small });
	return (
		<div className={classes.root}>
			<Link to={to} className={classes.navLogo}>
				<img src={logoApp} alt={nameLink} className={classes.sizeLogoImg} />
				<Typography variant={small ? 'subtitle1' : 'h4'} noWrap>
					{nameLink}
				</Typography>
			</Link>
			{children}
		</div>
	);
}

export default AppLogoLink;
