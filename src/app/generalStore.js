import { getProduct, getProductsList } from 'api/productosApi';
import create from 'zustand';

let store = (set) => ({
	productos: [],
	producto: {},

	async getProductosAction() {
		const { data } = await getProductsList();
		set(() => ({ productos: [...data] }));
	},

	async getProductoAction(productoId) {
		const res = await getProduct(productoId);
		set({
			producto: res.data,
		});
	},
});

const useGeneralStore = create(store);

export default useGeneralStore;
