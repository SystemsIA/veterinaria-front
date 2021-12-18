import { getToken } from 'utils';
import clientHttp from './config';

export async function registrarMascota(clientId, data) {
	try {
		return await clientHttp.post(`/clientes/${clientId}/mascotas/`, data, {
			headers: {
				Authorization: `token ${getToken()}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}

export async function getMascotaList() {
	return await clientHttp.get('/mascotas/', {
		headers: {
			Authorization: `token ${getToken()}`,
		},
	});
}

export async function getMascotaHistorialList(mascotaId) {
	return await clientHttp.get(`/mascotas/${mascotaId}/historias/`, {
		headers: {
			Authorization: `token ${getToken()}`,
		},
	});
}
