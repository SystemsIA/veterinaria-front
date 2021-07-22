import shallow from 'zustand/shallow';
import useClientStore from 'app/clientStore';

function useClient() {
	return useClientStore((state) => state, shallow);
}

export default useClient;
