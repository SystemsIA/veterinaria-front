import { useCallback, useMemo, useState } from 'react';

function useSearch(fieldSearch = '', dataSearch = []) {
	const [search, setSearch] = useState('');
	const handleSearch = useCallback((e) => {
		setSearch(e.target.value);
	}, []);

	const filterData = useMemo(
		() =>
			dataSearch.filter((d) =>
				d[fieldSearch].toLowerCase().includes(search.toLowerCase())
			),
		[dataSearch, fieldSearch, search]
	);
	return {
		handleSearch,
		data: filterData,
	};
}

export default useSearch;
