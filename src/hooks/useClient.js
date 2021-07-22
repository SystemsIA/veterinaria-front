import { useCallback } from 'react';
import shallow from 'zustand/shallow';
import useClientStore from 'app/clientStore';

function useClient() {
	return useClientStore(
		useCallback((state) => state, []),
		shallow
	);
}

export default useClient;
