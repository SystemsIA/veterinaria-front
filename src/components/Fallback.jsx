import { makeStyles, LinearProgress } from '@material-ui/core';

// Custom Styles
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		position: 'fixed',
		top: 0,
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

function Fallback() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<LinearProgress color="primary" />
		</div>
	);
}

export default Fallback;
