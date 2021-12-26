import { getToken } from 'utils';
import clientHttp from './config';

export async function crearHistoria(mascotaId, data) {
	try {
		return await clientHttp.post(`/mascotas/${mascotaId}/historias/`, data, {
			headers: {
				Authorization: `token ${getToken()}`,
			},
		});
	} catch (error) {
		return error.response;
	}
}
