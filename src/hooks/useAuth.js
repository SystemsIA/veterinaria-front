import useAuthStore from 'app/authStore';
import shallow from 'zustand/shallow';

function useAuth() {
	return useAuthStore((state) => state, shallow);
}

export default useAuth;
