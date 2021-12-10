import axios from 'axios';
import { AUTH_TOKEN } from 'utils';

axios.defaults.baseURL = process.env.REACT_APP_API_URL?.length
	? process.env.REACT_APP_API_URL + '/api'
	: '';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const clientHttp = axios.create();

// TODO: Configure interceptors request
clientHttp.interceptors.response.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
clientHttp.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

export default clientHttp;
