import axios from 'axios';
import { AUTH_TOKEN } from 'app/authStore';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || '';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const clientHttp = axios.create({});
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// TODO: Configure interceptors request
clientHttp.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
