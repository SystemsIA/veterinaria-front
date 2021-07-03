import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	textField: {
		margin: theme.spacing(1),
	},

	btnSubmit: {
		margin: theme.spacing(1),
	},

	form: {
		width: (props) => (props.width ? props.width : '45%'),
	},
}));
