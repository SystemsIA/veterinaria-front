import { Fragment } from 'react';
import useMounted from 'hooks/useMounted';
import useAuth from 'hooks/useAuth';

function AppRoot({ children }) {
	const auth = useAuth();

	useMounted(async (isMounted) => {
		if (isMounted) {
			await auth.userDetailAction();
		}
	});
	return <Fragment>{children}</Fragment>;
}

export default AppRoot;
