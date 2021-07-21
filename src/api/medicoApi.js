import { AUTH_TOKEN } from 'app/authStore';
import clientHttp from './config';

export async function crearHistoria(mascotaId, data) {
	try {
		return await clientHttp.post(`/mascotas/${mascotaId}/historias/`, data, {
			headers: {
				Authorization: `token ${AUTH_TOKEN}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}
