import { useCallback, useState } from 'react';

function useFormInput(initData = {}) {
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

export function useForm(initValues = {}) {
	const [fields, setFields] = useState(initValues);

	const onChange = useCallback(
		(e) => {
			const { value, name, type, checked } = e.target;
			setFields({ ...fields, [name]: type === 'checkbox' ? checked : value });
		},
		[fields]
	);

	const resetValues = (e) => {
		const { name, type, checked } = e.target;
		setFields((s) => ({ ...s, [name]: type === 'checkbox' ? checked : '' }));
	};

	return {
		fields,
		resetValues,
		getInput: (name) => ({
			name,
			value: fields[name],
			onChange,
		}),
		getCheckbox: (name) => ({
			name,
			checked: fields[name],
			onChange,
		}),
		getRadio: (name, value) => ({
			name,
			value,
			checked: value === fields[name],
			onChange,
		}),
		getSelect: (name) => ({
			name,
			value: fields[name],
			onChange,
		}),
	};
}
