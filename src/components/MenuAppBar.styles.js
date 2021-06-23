import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;
export default makeStyles((theme) => ({
	menuButton: {
		marginRight: theme.spacing(1),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		backgroundColor: '#F3F3F1',
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#F3F3F1',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	navMobile: {
		display: 'flex',
		flex: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	linkNav: {
		padding: theme.spacing(1, 2),
		cursor: 'pointer',
		transition: '0.3s ease',
		textDecoration: 'none',
		color: '#5e5c5c',
		fontWeight: theme.typography.fontWeightRegular,
		'&:hover': {
			color: '#b35f97eb',
		},
	},
	activeClassName: {
		color: '#b35f97eb',
	},
	sideBarLinks: {
		cursor: 'pointer',
		color: '#b35f97eb',
		textDecoration: 'none',
	},
}));
