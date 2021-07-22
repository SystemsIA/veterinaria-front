import create from 'zustand';
import { persist } from 'zustand/middleware';
import * as apiUser from 'api/userApi';

function parseUser(user) {
	const isDoctor = user?.tipoUsuario !== 'CLIENTE';
	const isClient = !isDoctor;
	let u = {
		direccion: user.direccion,
		dni: user.dni,
		email: user.email,
		id: user.id,
		nombre: user.nombre,
		telefono: user.telefono,
	};
	if (isClient) return { ...u, isClient };
	else return { ...u, isDoctor };
}

const store = persist(
	(set, get) => ({
		user: {},
		loading: false,
		isLogin: false,
		isError: false,
		message: '',

		// Mutations
		async loginAction(u = { email: '', password: '' }) {
			set({ loading: true });
			let resLogin = await apiUser.fetchLogin(u);

			if (resLogin.status === 400) {
				set({
					isLogin: false,
					message: resLogin.data?.nonFieldErrors[0],
					loading: false,
					isError: true,
				});
			} else {
				let userDetail = await apiUser.fetchUserDetail(resLogin.data.key);
				set({
					user: {
						...parseUser(userDetail.data),
					},
					token: resLogin.data.key,
					isLogin: true,
					message: '',
					loading: false,
					isError: false,
				});
			}
		},

		async logoutAction() {
			await apiUser.fetchLogout();
			delete get()?.token;
			set({
				user: {},
				isLogin: false,
				isError: false,
			});
		},

		resetAction() {
			set({
				user: {},
				loading: false,
				isLogin: false,
				isError: false,
				message: '',
			});
		},
	}),
	{
		version: 1,
		name: 'STATE_AUTH',
		getStorage: () => localStorage,
	}
);

const useAuthStore = create(store);

let AUTH_TOKEN = '';
useAuthStore.subscribe((state) => {
	AUTH_TOKEN = state?.token || '';
});
AUTH_TOKEN = useAuthStore.getState()?.token;
export { AUTH_TOKEN };

export default useAuthStore;
