import { useState, useCallback } from 'react';

function useFormInput(initData) {
	const [formData, setForm] = useState(initData);

	const handleChange = useCallback(
		(e) => {
			setForm({ ...formData, [e.target.name]: e.target.value });
		},
		[formData]
	);
	return { formData, handleChange };
}

export default useFormInput;
