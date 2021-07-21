import shallow from 'zustand/shallow';
import useGeneralStore from 'app/generalStore';

function useGeneralState() {
	return useGeneralStore((state) => state, shallow);
}

export default useGeneralState;
