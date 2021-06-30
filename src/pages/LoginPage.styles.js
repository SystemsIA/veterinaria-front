import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexGrow: 1,
	},

	withoutFlexBasis: {
		flexBasis: 'auto',
	},

	loginContent: {
		maxWidth: '100%',
		textAlign: 'center',
		'& img': {
			margin: '1rem auto',
			maxWidth: '222px',
			maxHeight: '212px',
		},
	},

	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));
