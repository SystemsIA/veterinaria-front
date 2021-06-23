import create from 'zustand';
import { persist } from 'zustand/middleware';

const store = persist(
	(set) => ({
		user: {},
		loading: false,
		isLogin: false,
		isError: false,
		message: '',

		// Mutations
		loginAction(user = { token: '', role: '', email: '', username: '' }) {
			set({ loading: true });
			setTimeout(() => {
				set({
					user,
					isLogin: true,
					message: '',
					loading: false,
					isError: false,
				});
			}, 2000);
		},

		logoutAction() {
			set({
				user: {},
				isLogin: false,
				isError: false,
			});
		},

		errorAction(message = '') {
			set({ message, isError: true });
			setTimeout(() => {
				set({ message: '', isError: false });
			}, [1500]);
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
export const AUTH_TOKEN = useAuthStore.getState().user?.token || '';
export default useAuthStore;
