import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL || '';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const clientHttp = axios.create({});
// TODO: Configure interceptors request
clientHttp.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
