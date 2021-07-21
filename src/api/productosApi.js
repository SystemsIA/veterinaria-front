import clientHttp from './config';

export async function getProductsList() {
	return await clientHttp.get('/productos/');
}
