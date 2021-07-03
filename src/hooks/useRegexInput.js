import { useState } from 'react';

export function useInputRegex(regex) {
	const [isValid, setIsValid] = useState(true);

	const onChange = (e) => {
		if (regex.test(e.target.value)) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};
	return { isValid, onChange };
}
export function useRegexEmail() {
	const rEmail = /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.([a-z]{3}|([a-z]{3}\.[a-z]{2}))$/i;
	return useInputRegex(rEmail);
}
