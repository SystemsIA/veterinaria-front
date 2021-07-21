import { createContext, useContext, useState } from 'react';

const modalContext = createContext();
modalContext.displayName = 'Modal';

export function ModalProvider(props) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<modalContext.Provider value={{ handleOpen, handleClose, open }}>
			{props.children}
		</modalContext.Provider>
	);
}

export function useModalTransition() {
	return useContext(modalContext);
}
