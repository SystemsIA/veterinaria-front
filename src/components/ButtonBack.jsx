import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function ButtonBack() {
	const history = useHistory();

	return (
		<Button color="secondary" variant="contained" onClick={history.goBack}>
			Regresar
		</Button>
	);
}

export default ButtonBack;
