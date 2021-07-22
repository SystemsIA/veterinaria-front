import create from 'zustand';
import * as apiCliente from 'api/clienteApi';
import {
	getMascotaHistorialList,
	getMascotaList,
	registrarMascota,
} from 'api/mascotaApi';
import { crearHistoria } from 'api/medicoApi';
import { cambioPassword } from 'api/userApi';

const useClientStore = create((set, get) => ({
	loading: false,
	isError: false,
	message: '',
	clientes: [],
	mascotas: [],
	historial: [],
	tareas: [],

	async registerAction(user) {
		set({ loading: true });
		const res = await apiCliente.registerCliente(user);

		if (res.status !== 201) {
			set({
				message: res?.data ? Object.values(res?.data) : [],
				isError: true,
				loading: false,
			});
		} else {
			set((state) => ({
				...state,
				clientes: [res.data, ...get().clientes],
				message: 'Se registro al cliente exitosamente',
				isError: false,
				isSuccess: true,
				loading: false,
			}));
		}
	},

	async fetchClientAction(clientId) {
		const { data } = await apiCliente.getCliente(clientId);
		set((state) => ({
			...state,
			c: { nombre: data.nombre, mascotas: data.mascotas },
		}));
	},

	async listClientesAction() {
		const res = await apiCliente.getClienteList();
		set({ clientes: [...res.data] });
	},

	async registrarMascotaAction(clientId, data) {
		const res = await registrarMascota(clientId, data);
		if (res.status !== 201) {
			set({
				message: Object.values(res?.data),
				isError: true,
				loading: false,
			});
		} else {
			set({
				mascotas: [res.data, ...get().mascotas],
				message: 'Se registro a la mascota',
				isError: false,
				isSuccess: true,
				loading: false,
			});
		}
	},

	async listMascotaAction() {
		const res = await getMascotaList();
		set({ mascotas: [...res.data] });
	},

	async crearHistoriaAction(mascotaId, data) {
		const res = await crearHistoria(mascotaId, data);
		if (res.status !== 200) {
			set({
				message: Object.values(res?.data),
				isError: true,
				loading: false,
			});
		} else {
			set((state) => {
				return {
					message: 'Se creo la tarea de la mascota',
					tareas: [...state.tareas, res.data],
					isError: false,
					isSuccess: true,
					loading: false,
				};
			});
		}
	},

	async mascotaHistorialAction(mascotaId) {
		const res = await getMascotaHistorialList(mascotaId);
		set({ historial: res.data });
	},

	async cambioPasswordAction(data) {
		const res = await cambioPassword(data);

		if (res.status === 400) {
			set({
				isLogin: false,
				message: res.data.nonFieldErrors,
				loading: false,
				isError: true,
			});
		} else {
			set({
				message: res.data.detail,
				loading: false,
				isSuccess: true,
				isError: false,
			});
		}
	},

	async historiasListAction() {
		const res = await apiCliente.getHistoriasList();

		set((state) => {
			return {
				tareas: [...res.data, ...state.tareas],
			};
		});
	},

	resetAction() {
		set((state) => {
			delete state.isSuccess;
			return {
				...state,
				message: [] || '',
				isError: false,
				loading: false,
			};
		});
	},
}));
export default useClientStore;
