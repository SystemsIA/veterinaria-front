import { useCallback, useEffect, useRef } from 'react';

/**
 *
 * @param {function} fn
 * @return {boolean} isMountedRef
 */
function useMounted(fn) {
	const isMountedRef = useRef(true);

	const callback = useCallback(() => {
		fn(isMountedRef.current);
	}, [fn]);

	useEffect(() => {
		callback();
		return () => {
			isMountedRef.current = false;
		};
	}, [callback]);

	return isMountedRef.current;
}

export default useMounted;
