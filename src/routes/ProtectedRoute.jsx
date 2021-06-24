import { Redirect, Route } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import * as LINKS from 'routes';

const isDoctor = (r) => r !== 'CLIENTE';

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
				} else if (
					options.isRouteDoctor &&
					!isDoctor(auth?.user?.tipoUsuario)
				) {
					return (
						<Redirect
							exact
							from={LINKS.MEDICO_INICIO || LINKS.MEDICO_TAREAS}
							to={LINKS.FORBIDDEN}
						/>
					);
				} else {
					return <Component {...props} {...rest} />;
				}
			}}
		/>
	);
}

export default ProtectedRoute;
