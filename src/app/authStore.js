import create from 'zustand';
import { persist } from 'zustand/middleware';
import { fetchLlogout, fetchLogin, fetchUserDetail } from 'api/userApi';

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
			let resLogin = await fetchLogin(u);

			if (resLogin.status === 400) {
				set({
					isLogin: false,
					message: resLogin.data?.nonFieldErrors[0],
					loading: false,
					isError: true,
				});
			} else {
				let userDetail = await fetchUserDetail(resLogin.data.key);
				set({
					user: {
						...userDetail.data,
					},
					isLogin: true,
					message: '',
					loading: false,
					isError: false,
				});
			}
		},

		async logoutAction() {
			await fetchLlogout(get().user?.token);
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
		getStorage: () => localStorage,
		name: 'STATE_AUTH',
	}
);

const useAuthStore = create(store);
export default useAuthStore;

export const AUTH_TOKEN = useAuthStore.getState().user?.token || '';
