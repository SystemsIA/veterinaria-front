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
	key: getToken(),
	
	// Mutations
	async loginAction(data = { email: '', password: '' }) {
		set({ loading: true });
		let resLogin = await apiUser.fetchLogin(data);
		
		if (resLogin.status === 400) {
			set({
				isLogin: false,
				message: resLogin.data.detail?.nonFieldErrors[0],
				loading: false,
				isError: true
			});
		} else {
			this.resetAction();
			set({ key: resLogin.data.key });
			await this.userDetailAction(resLogin.data.key);
		}
	},
	
	async userDetailAction(token) {
		let userDetail = await apiUser.fetchUserDetail(token);
		
		if (userDetail.status !== 200) {
			set({
				user: null,
				isLogin: false,
				isReady: true
			});
		} else {
			let user = parseUser(userDetail.data);
			set({
				user,
				isLogin: Boolean(userDetail.data),
				isReady: Boolean(userDetail.data)
			});
		}
	},
	
	async logoutAction() {
		setToken();
		await apiUser.fetchLogout();
		this.resetAction();
	},
	
	async setReadyAppAction(v = false) {
		set({
			...get(),
			isReady: v
		});
	},
	
	resetAction() {
		set({
			user: null,
			loading: false,
			isLogin: false,
			isError: false,
			message: '',
			key: ''
		});
	}
});

let useAuthStore = create(store);

useAuthStore.subscribe((state) => {
	setToken(state.key);
});

export default useAuthStore;
