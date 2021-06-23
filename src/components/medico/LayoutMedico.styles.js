import { makeStyles } from '@material-ui/core';

const drawerWidth = 240;

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#95D1D8',
	},
	drawerContainer: {
		overflow: 'auto',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
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

	rootList: {
		width: '100%',
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},

	imgSize: {
		'& img': {
			maxWidth: 40,
			minWidth: 15,
		},
	},

	paper: {
		padding: 20,
	},
	toolbar: {
		padding: 0,
		justifyContent: 'space-between',
	},

	contentChildren: {
		flexGrow: 1,
		flexDirection: 'column',
	},
}));
