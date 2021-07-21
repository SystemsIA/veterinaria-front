import { Link } from 'react-router-dom';

import { Button } from '@material-ui/core';

function ButtonLink({ children, text = '', ...rest }) {
	return (
		<Button {...rest} component={Link}>
			{text.length > 0 && text}
			{children}
		</Button>
	);
}

export default ButtonLink;
