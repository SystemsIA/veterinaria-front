import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '4px 0',
		position: 'relative',
		flexGrow: 1,
	},
	withoutFlexBasis: {
		flexBasis: 'auto',
		'& img': {
			maxWidth: 350,
			minWidth: 100,
			transform: 'scaleX(-1)',
		},
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,

		'& ul': {
			listStyleType: 'none',
			padding: theme.spacing(1, 0),
		},
		'& li': {
			display: 'flex',
			flexBasis: 2,
		},
	},
	sizeImgMobile: {
		width: '240px',
	},
	content: {
		maxWidth: '100%',
	},
	paperTitle: {
		padding: theme.spacing(1, 1),
		margin: theme.spacing(2, 0),
		width: '50%',
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.getContrastText(theme.palette.secondary.main),
		[theme.breakpoints.down('sm')]: {
			fontSize: 10,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 100,
		},
	},

	lineSeparator: {
		backgroundColor: theme.palette.primary.main,
		maxWidth: theme.breakpoints.values.xl,
		height: '2em',
	},

	imgAndTitle: {
		position: 'relative',
	},

	titleLanding: {
		[theme.breakpoints.down('md')]: {
			fontSize: 30,
		},
		position: 'absolute',
		left: 20,
		top: 10,
		color: theme.palette.primary.dark,
		fontWeight: 'bold',
	},
	logoLanding: {
		position: 'absolute',
		[theme.breakpoints.down('sm')]: {
			top: 50,
			width: 100,
			right: 70,
		},
		[theme.breakpoints.up('md')]: {
			width: 220,
			top: 170,
			right: 200,
		},
		[theme.breakpoints.up('lg')]: {
			width: 270,
			top: 170,
			right: 200,
		},
	},

	imgLanding: {
		width: '100%',
		zIndex: '100',
	},
}));
