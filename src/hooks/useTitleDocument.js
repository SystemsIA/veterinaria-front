import { useEffect } from 'react';

function useTitleDocument(title) {
	useEffect(() => {
		document.title = title;
	}, [title]);
}
export default useTitleDocument;
