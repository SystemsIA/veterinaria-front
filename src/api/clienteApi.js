import { getToken } from 'utils';
import clientHttp from './config';

export async function registerCliente(cliente) {
	try {
		return await clientHttp.post('/clientes/', {
			...cliente,
			password: cliente.dni,
		});
	} catch (error) {
		return error.response;
	}
}

export async function getClienteList() {
	return await clientHttp.get('/clientes/', {
		headers: {
			Authorization: `token ${getToken()}`,
		},
	});
}

export async function getCliente(clientId) {
	return await clientHttp.get(`/clientes/${clientId}/`, {
		headers: {
			Authorization: `token ${getToken()}`,
		},
	});
}

export async function getHistoriasList() {
	return await clientHttp.get('/historias/', {
		headers: {
			Authorization: `token ${getToken()}`,
		},
	});
}
