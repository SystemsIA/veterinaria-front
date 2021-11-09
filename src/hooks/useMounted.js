import { useCallback, useEffect, useRef } from 'react';

/**
 *
 * @param {function} fn
 * @return {boolean} isMountedRef
 */
function useMounted(fn) {
	const isMountedRef = useRef(true);

	const callback = useCallback(() => {
		fn?.();
	}, [fn]);

	useEffect(() => {
		isMountedRef.current && callback();
		return () => {
			isMountedRef.current = false;
		};
	}, [callback]);

	return isMountedRef.current;
}

export default useMounted;
