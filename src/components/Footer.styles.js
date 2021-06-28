import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
	footer: {
		width: '100%',
		position: 'fixed',
		left: 0,
		bottom: 0,

		'& > *': { padding: '0.5rem 2rem' },
	},
	content: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'& img': {
			maxWidth: 50,
			maxHeight: 50,
		},
	},
}));
