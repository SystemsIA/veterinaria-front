import makeStyles from '@material-ui/core/styles/makeStyles';

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
		top: '30%',
		left: '48%',
	},
}));
