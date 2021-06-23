import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
	footer: {
		position: 'relative',

		'& > *': { padding: '0.5rem 2rem' },
	},
	content: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'wrap',

		'& img': {
			maxWidth: 50,
			maxHeight: 50,
		},
	},
}));
