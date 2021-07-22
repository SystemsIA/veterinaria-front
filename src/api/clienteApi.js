import { AUTH_TOKEN } from 'app/authStore';
import clientHttp from './config';

export async function registerCliente(cliente) {
	try {
		return await clientHttp.post(
			'/clientes/',
			{ ...cliente, password: cliente.dni },
			{
				headers: {
					Authorization: `token ${AUTH_TOKEN}`,
				},
			}
		);
	} catch (error) {
		return error.response;
	}
}
export async function getClienteList() {
	return await clientHttp.get('/clientes/', {
		headers: {
			Authorization: `token ${AUTH_TOKEN}`,
		},
	});
}

export async function getCliente(clientId) {
	return await clientHttp.get(`/clientes/${clientId}/`, {
		headers: {
			Authorization: `token ${AUTH_TOKEN}`,
		},
	});
}

export async function getHistoriasList() {
	return await clientHttp.get('/historias/', {
		headers: {
			Authorization: `token ${AUTH_TOKEN}`,
		},
	});
}
