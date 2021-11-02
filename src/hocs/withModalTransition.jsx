import { ModalProvider } from 'contexts/ModalTransitionContext';

function withModalTransition(WrapperComponent) {
	return function (props) {
		return (
			<ModalProvider>
				<WrapperComponent {...props} />
			</ModalProvider>
		);
	};
}

export default withModalTransition;
