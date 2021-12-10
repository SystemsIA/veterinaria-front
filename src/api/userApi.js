import clientHttp from 'api/config';
import { AUTH_TOKEN } from 'utils';

export async function fetchLogin(user) {
	try {
		return await clientHttp.post('/rest-auth/login/', user);
	} catch (error) {
		return error.response;
	}
}

export async function fetchUserDetail() {
	try {
		return await clientHttp.get('/rest-auth/user/', {
			headers: {
				Authorization: `Bearer ${AUTH_TOKEN}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}

export async function fetchLogout() {
	try {
		return await clientHttp.post('/rest-auth/logout/');
	} catch (error) {
		return error.response;
	}
}

export async function cambioPassword(data) {
	try {
		return await clientHttp.post('/rest-auth/password/', data);
	} catch (error) {
		return error.response;
	}
}
