import makeStyles from '@material-ui/core/styles/makeStyles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexGrow: 1,
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#95D1D8',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
		backgroundColor: '#E5E5E5',
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	rootList: {
		width: '100%',
	},

	imgSize: {
		'& img': {
			maxWidth: 40,
			minWidth: 15,
		},
	},
	toolbar: {
		padding: 0,
		justifyContent: 'space-between',
	},
	roundedLogo: {
		height: 150,
		width: 150,
		borderRadius: '50%',
		backgroundColor: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	nameDoctorLogo: {
		marginTop: '2rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		'& img': {
			maxHeight: 140,
		},
	},
	drawerContainer: {
		overflow: 'auto',
	},
}));
