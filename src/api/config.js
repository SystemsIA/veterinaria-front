import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL?.length
	? process.env.REACT_APP_API_URL + '/api'
	: '';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const clientHttp = axios.create();

clientHttp.interceptors.response.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default clientHttp;
