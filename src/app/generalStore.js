import { getProductsList } from 'api/productosApi';
import create from 'zustand';

const useGeneralStore = create((set) => ({
	productos: [],

	async getProductos() {
		const { data } = await getProductsList();
		set((state) => ({ productos: [...state.productos, ...data] }));
	},
}));

export default useGeneralStore;
