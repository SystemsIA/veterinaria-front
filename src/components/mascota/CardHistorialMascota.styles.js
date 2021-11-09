import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
	root: {
		maxWidth: 536,
		maxHeight: 532,
		backgroundColor: theme.palette.primary.light,
	},
	media: {
		paddingTop: '56.25%',
		width: 152,
		height: 195,
	},
	cardHeader: {
		padding: '10px',
	},
	avatar: {
		backgroundColor: theme.palette.primary.light,
	},
	rootContent: {
		padding: '2px',
		'&:last-child': {
			paddingBottom: 2,
		},
	},

	bgContent: {
		backgroundColor: '#fff',
		padding: '5px 0.5rem',
	},

	btnBg: {
		color: theme.palette.getContrastText(theme.palette.info.light),
		backgroundColor: theme.palette.info.light,
		'&:active': {
			ackgroundColor: theme.palette.info.light,
		},
	},

	contentInfoMascota: {
		'& b': {
			color: theme.palette.secondary.light,
		},
	},
}));
