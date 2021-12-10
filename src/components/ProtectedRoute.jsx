import { Redirect, Route } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import * as LINKS from 'routes';
import verifyUser from 'utils/verifiyUser';

function ProtectedRoute({ options = { isRouteDoctor: false }, ...restProps }) {
  const auth = useAuth();

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
  } else if (!verifyUser(auth?.user?.id)) {
    return <Redirect exact to={LINKS.UNAUTHORIZED} />;
  }

  return <Route {...restProps} />;
}

export default ProtectedRoute;
