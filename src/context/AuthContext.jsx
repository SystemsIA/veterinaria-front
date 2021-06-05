import { createContext, useContext, useReducer } from 'react';
import * as typesAuth from '../type-actions/authTypeActions';
import {
  getAuth,
  getState,
  getToken,
  removeAuth,
  saveAuth,
  saveState,
} from '../helpers/localStorage';

const AuthCtx = createContext({});

const initialState = {
  auth: { ...getAuth() },
  token: getToken(),

  ...getState(),
};

function init(initState) {
  return { ...initState };
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case typesAuth.AUTH_LOGIN_BEGIN:
      return { loading: true };

    case typesAuth.AUTH_LOGIN_SUCCESS:
      saveAuth(action.payload);

      return {
        ...state,
        loading: false,
        auth: action.payload,
        isLogin: true,
        token: 'mi-token',
      };

    case typesAuth.AUTH_LOGOUT:
      removeAuth();

      return { auth: {}, isLogin: false };

    case typesAuth.AUTH_LOGIN_FAIL:
      removeAuth();

      return {
        ...state,
        loading: false,
        auth: {},
        isLogin: false,
        message: action.payload,
        isError: true,
      };
    default:
      return state;
  }
}

export function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState, init);
  saveState(state);
  const handleLogin = (user) => {
    dispatch({ type: typesAuth.AUTH_LOGIN_BEGIN });
    dispatch({
      type: typesAuth.AUTH_LOGIN_SUCCESS,
      payload: { username: user.username },
    });
    saveState(state);
  };
  const handleLogout = () => {
    dispatch({ type: typesAuth.AUTH_LOGOUT });
    saveState(state);
  };

  const handleError = (message) => {
    dispatch({
      type: typesAuth.AUTH_LOGIN_FAIL,
      payload: message,
    });
    saveState(state);
  };
  return (
    <AuthCtx.Provider value={{ state, handleLogout, handleLogin, handleError }}>
      {props.children}
    </AuthCtx.Provider>
  );
}

export function useAuth() {
  const { state, handleLogout, handleLogin, handleError } = useContext(AuthCtx);
  return { state, handleLogout, handleLogin, handleError };
}
