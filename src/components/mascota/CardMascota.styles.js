import { makeStyles } from '@material-ui/core';

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
	avatar: {
		backgroundColor: theme.palette.primary.light,
	},
	rootContent: {
		padding: '2px',
		'&:last-child': {
			paddingBottom: 2,
		},
	},

	linkBtn: {
		width: '45%',
		textDecoration: 'none',
		'& > button': {
			width: '100%',
			textTransform: 'uppercase',
		},
	},

	bgContent: {
		backgroundColor: '#fff',
		padding: '5px 0.5rem',

		'& > button': {
			width: '45%',
			textTransform: 'uppercase',
		},
	},

	btnBg: {
		color: theme.palette.getContrastText(theme.palette.info.light),
		backgroundColor: theme.palette.info.light,
		'&:active': {
			ackgroundColor: theme.palette.info.light,
		},
		'&:hover': {
			ackgroundColor: theme.palette.info.light,
		},
	},

	contentInfoMascota: {
		'& b': {
			color: theme.palette.secondary.light,
		},
	},
}));
