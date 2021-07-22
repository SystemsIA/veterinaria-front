import { useCallback, useMemo, useState } from 'react';

function useSearch(field, data) {
	const dataMemo = useMemo(() => data, [data]);
	const [search, setSearch] = useState('');
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	const filterData = useCallback(() => {
		return dataMemo.filter((d) =>
			d[field].toLowerCase().includes(search.toLowerCase())
		);
	}, [dataMemo, field, search]);
	return {
		handleSearch,
		data: filterData(),
	};
}
export default useSearch;
