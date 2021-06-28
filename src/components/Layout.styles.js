import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
export default makeStyles((theme) => ({
	content: {
		flexGrow: 1,
		flexBasis: 'auto',
		padding: theme.spacing(2),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
		marginBottom: '4rem',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
}));
