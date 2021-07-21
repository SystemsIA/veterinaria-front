import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	btnSubmit: {
		margin: theme.spacing(1),
	},

	form: {
		width: (props) => (props.width ? props.width : '45%'),
	},

	content: {
		'& *': {
			margin: theme.spacing(0.3),
		},
	},
}));
