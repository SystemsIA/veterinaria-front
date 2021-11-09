import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
// Icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
		color: theme.palette.getContrastText(theme.palette.primary.light),
	},
}));

function ButtonBack({ text = 'Regresar', ...restProps }) {
	const history = useHistory();
	const classes = useStyles();
	return (
		<Button
			startIcon={<ArrowBackIcon />}
			{...restProps}
			onClick={history.goBack}
			className={classes.button}
		>
			{text}
		</Button>
	);
}

export default ButtonBack;
