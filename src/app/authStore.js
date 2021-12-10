import create from 'zustand';
import * as apiUser from 'api/userApi';
import { getToken, parseUser, setToken } from 'utils';

const store = (set, get) => ({
	user: null,
	loading: false,
	isLogin: false,
	isError: false,
	isReady: false,
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
			await setToken(resLogin.data.token);
			await this.userDetailAction();
		}
	},

	async userDetailAction() {
		let key = getToken();
		let userDetail = await apiUser.fetchUserDetail(key);

		// TODO: resolve consumer api
		if (!Boolean(userDetail)) {
			set({
				user: null,
				isLogin: false,
			});
		} else {
			let user = parseUser(userDetail.data);
			set({
				user,
				isLogin: Boolean(userDetail.data),
			});
		}
	},

	async logoutAction() {
		await apiUser.fetchLogout();
		setToken('');
		this.resetAction();
	},

	setReadyAppAction(v = false) {
		set({
			...get(),
			isReady: v,
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

let useAuthStore = create(store);

export default useAuthStore;
