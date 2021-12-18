export function setToken(token = '') {
	localStorage.setItem('token', token);
}

export function getToken() {
	let token = localStorage.getItem('token');

	return token || '';
}

export function parseUser(user) {
	const isDoctor = user?.tipoUsuario !== 'CLIENTE';
	const isClient = !isDoctor;
	let u = {
		direccion: user.direccion,
		dni: user.dni,
		email: user.email,
		id: user.id,
		nombre: user.nombre,
		telefono: user.telefono,
	};
	if (isClient) return { ...u, isClient };
	else return { ...u, isDoctor };
}
