import useAuthStore from 'app/authStore';

function verifyUser(id) {
	const userId = Number(useAuthStore.getState().user?.id);
	return userId === Number(id);
}

export default verifyUser;
