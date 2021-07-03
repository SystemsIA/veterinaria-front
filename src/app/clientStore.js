import create from 'zustand';
import * as apiCliente from 'api/clienteApi';

const useClientStore = create((set) => ({
	loading: false,
	isError: false,
	message: '',

	async registerAction(user) {
		set({ loading: true });
		const res = await apiCliente.registerClient(user);

		set({
			message: res?.data?.detail || '',
			isError: true,
			loading: false,
		});
	},

	resetAction() {
		set({
			message: '',
			isError: false,
			loading: false,
		});
	},
}));
export default useClientStore;
