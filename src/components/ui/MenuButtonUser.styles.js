import { makeStyles } from '@material-ui/core';
import * as colors from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	menuLinks: {
		'& > a': {
			textDecoration: 'none',
			color: theme.palette.secondary.light,
			display: 'block',
			width: '100%',
		},
	},
	btnLogout: {
		transition: '0.3s ease-out',
		'&:hover': {
			backgroundColor: colors.red['400'],
			color: '#fff',
		},
	},
	ulMenu: {
		padding: theme.spacing(0),
	},
}));
