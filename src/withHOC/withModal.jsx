import {
	ModalProvider,
	useModalTransition,
} from 'contexts/ModalTransitionContext';

function withModal(WrapperComponent) {
	return function (props) {
		const modal = useModalTransition();
		return (
			<ModalProvider>
				<WrapperComponent {...props} modal={modal} />
			</ModalProvider>
		);
	};
}

export default withModal;
