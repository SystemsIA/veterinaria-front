import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	form: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		'& > *': {
			margin: theme.spacing(1),
		},
	},

	btn: {
		position: 'relative',
	},
	loader: {
		position: 'absolute',
		top: '50%',
		left: '50%',
	},
}));
