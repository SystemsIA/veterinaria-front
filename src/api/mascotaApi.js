import { AUTH_TOKEN } from 'utils';
import clientHttp from './config';

export async function registrarMascota(clientId, data) {
	try {
		return await clientHttp.post(`/clientes/${clientId}/mascotas/`, data, {
			headers: {
				Authorization: `token ${AUTH_TOKEN}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}

export async function getMascotaList() {
	return await clientHttp.get('/mascotas/', {
		headers: {
			Authorization: `token ${AUTH_TOKEN}`,
		},
	});
}

export async function getMascotaHistorialList(mascotaId) {
	return await clientHttp.get(`/mascotas/${mascotaId}/historias/`, {
		headers: {
			Authorization: `token ${AUTH_TOKEN}`,
		},
	});
}