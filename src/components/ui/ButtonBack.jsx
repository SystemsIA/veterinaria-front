import { Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		color: theme.palette.getContrastText(theme.palette.primary.light),
	},
}));

function ButtonBack({ text = 'Regresar', ...rest }) {
	const history = useHistory();
	const classes = useStyles();
	return (
		<Button {...rest} onClick={history.goBack} className={classes.button}>
			{text}
		</Button>
	);
}

export default ButtonBack;
