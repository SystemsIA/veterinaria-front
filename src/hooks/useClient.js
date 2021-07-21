import shallow from 'zustand/shallow';
import useClientStore from 'app/clientStore';
import { useCallback } from 'react';

function useClient() {
	return useClientStore(
		useCallback((state) => state, []),
		shallow
	);
}

export default useClient;
