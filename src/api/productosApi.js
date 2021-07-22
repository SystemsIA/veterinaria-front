import clientHttp from './config';

export async function getProductsList() {
	return await clientHttp.get('/productos/');
}

export async function getProduct(productoId) {
	return await clientHttp.get(`/productos/${productoId}`);
}
