import create from 'zustand';
import * as apiUser from 'api/userApi';
import { getToken, setToken } from 'utils';

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

const store = (set, get) => ({
	user: null,
	loading: false,
	isLogin: false,
	isError: false,
	message: '',

	// Mutations
	async loginAction(data = { email: '', password: '' }) {
		set({ loading: true });
		let resLogin = await apiUser.fetchLogin(data);

		if (resLogin.status === 400) {
			set({
				isLogin: false,
				message: resLogin.data?.nonFieldErrors[0],
				loading: false,
				isError: true,
			});
		} else {
			this.resetAction();
			setToken(resLogin.data.key);
			await this.userDetailAction();
		}
	},

	async userDetailAction() {
		let key = getToken();
		let userDetail = await apiUser.fetchUserDetail(key);

		let user = parseUser(userDetail.data);
		set({
			user,
			isLogin: Boolean(userDetail.data),
		});
	},

	async logoutAction() {
		await apiUser.fetchLogout();
		setToken('');
		set({
			user: null,
			isLogin: false,
			isError: false,
		});
	},

	resetAction() {
		set({
			user: null,
			loading: false,
			isLogin: false,
			isError: false,
			message: '',
		});
	},
});

const useAuthStore = create(store);

export default useAuthStore;
