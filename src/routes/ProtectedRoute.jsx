import { Redirect, Route } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import * as LINKS from 'routes';

function ProtectedRoute({
	component: Component,
	options = { isRouteDoctor: false },
	...rest
}) {
	const auth = useAuth();

	return (
		<Route
			{...rest}
			render={(props) => {
				if (!auth.isLogin) {
					return <Redirect exact to={LINKS.LOGIN} />;
				} else if (options.isRouteDoctor && auth?.user?.isClient) {
					return (
						<Redirect
							exact
							from={LINKS.MEDICO_INICIO || LINKS.MEDICO_TAREAS}
							to={LINKS.FORBIDDEN}
						/>
					);
				} else {
					return <Component {...props} />;
				}
			}}
		/>
	);
}

export default ProtectedRoute;
