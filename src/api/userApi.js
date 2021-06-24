import { clientHttp } from './config';

export async function fetchLogin(user = { username: '', password: '' }) {
	try {
		return await clientHttp.post('/api/rest-auth/login/', user);
	} catch (error) {
		return error.response;
	}
}
export async function fetchUserDetail(token = '') {
	try {
		return await clientHttp.get('/api/rest-auth/user/', {
			headers: {
				Authorization: `token ${token}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}

export async function fetchLlogout(token = '') {
	try {
		return await clientHttp.post('/api/rest-auth/logout/', {
			headers: {
				Authorization: `token ${token}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}
