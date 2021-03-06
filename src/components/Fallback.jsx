import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgress from '@material-ui/core/LinearProgress';

// Custom Styles
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		position: 'fixed',
		top: '4rem',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

function Fallback() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<LinearProgress color='primary' />
		</div>
	);
}

export default Fallback;
