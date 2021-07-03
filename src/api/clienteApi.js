import { AUTH_TOKEN } from 'app/authStore';
import clientHttp from './config';

export async function registerClient(user) {
	try {
		return await clientHttp.post('/api/medicos/crear_cliente/', user, {
			headers: {
				Authorization: `token ${AUTH_TOKEN}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}
