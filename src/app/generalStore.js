import { getProduct, getProductsList } from 'api/productosApi';
import create from 'zustand';

const useGeneralStore = create((set) => ({
	productos: [],
	producto: {},

	async getProductosAction() {
		const { data } = await getProductsList();
		set((state) => ({ productos: [...state.productos, ...data] }));
	},

	async getProductoAction(productoId) {
		const res = await getProduct(productoId);
		set({
			producto: res.data,
		});
	},
}));

export default useGeneralStore;
