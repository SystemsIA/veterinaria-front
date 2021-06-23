import { clientHttp } from './config';

export async function fetchLogin(user = { username: '', password: '' }) {
	const res = await clientHttp.post('/api/user/login', user);
	return res.data;
}
