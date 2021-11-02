function AuthenticateUser({ condition, children }) {
	if (condition) {
		return null;
	}

	return <>{children}</>;
}

export default AuthenticateUser;
