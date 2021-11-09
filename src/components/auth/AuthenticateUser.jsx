import { Fragment } from 'react';

function AuthenticateUser({ condition, children }) {
	if (condition) {
		return null;
	}

	return <Fragment>{children}</Fragment>;
}

export default AuthenticateUser;
