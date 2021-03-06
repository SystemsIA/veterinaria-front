import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
	root: {
		width: 450,
		maxHeight: 300,

		backgroundColor: '#C4C4C4',
		'& img': {
			borderRadius: '50%',
			maxWidth: 135,
			maxHeight: 138,
		},
	},

	content: {
		'& > button': {
			width: '45%',
			textTransform: 'uppercase',
		},
	},

	linkBtn: {
		width: '45%',
		margin: theme.spacing(1),
		textDecoration: 'none',
		'& > button': {
			width: '100%',
			textTransform: 'uppercase',
			color: theme.palette.getContrastText(theme.palette.primary.light),
		},
	},
}));
