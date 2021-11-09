import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

// Hooks
import { useModalTransition } from 'contexts/ModalTransitionContext';

//Styles
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		width: '70%',
		backgroundColor: theme.palette.background.paper,
		border: `2px solid ${theme.palette.primary.main}`,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(1, 3),
	},
}));

function TransitionsModal({ children }) {
	const classes = useStyles();
	const modal = useModalTransition();

	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			className={classes.modal}
			open={modal.open}
			onClose={modal.handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={modal.open}>
				<div className={classes.paper}>{children}</div>
			</Fade>
		</Modal>
	);
}

export default TransitionsModal;
