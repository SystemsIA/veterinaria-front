import { AUTH_TOKEN } from 'app/authStore';
import clientHttp from './config';

export async function registrarMascota(clientId, data) {
	// TODO: Fallo en crear el especieID
	try {
		return await clientHttp.post(`/clientes/${clientId}/mascotas/`,data, {
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
