import clientHttp from 'api/config';
import { AUTH_TOKEN } from 'utils';

export async function fetchLogin(user) {
	try {
		return await clientHttp.post('/rest-auth/login/', user);
	} catch (error) {
		return error.response;
	}
}

export async function fetchUserDetail(token = '') {
	try {
		return await clientHttp.get('/rest-auth/user/', {
			headers: {
				Authorization: `token ${token}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}

export async function fetchLogout() {
	try {
		return await clientHttp.post('/rest-auth/logout/', {
			headers: {
				Authorization: `token ${AUTH_TOKEN}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}

export async function cambioPassword(data) {
	try {
		return await clientHttp.post('/rest-auth/password/', data, {
			headers: {
				Authorization: `token ${AUTH_TOKEN}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}
