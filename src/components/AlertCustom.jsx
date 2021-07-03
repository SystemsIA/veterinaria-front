import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	textColor: {
		color: theme.palette.getContrastText(theme.palette.error.main),
	},
}));

/**
	@param typeAlert = 'info',
	@param variant = 'filled',
	@param message = '',
	@param handler = undefined,
*/
function AlertCustom({
	typeAlert = 'info',
	variant = 'filled',
	message = '',
	handle = undefined,
	children,
}) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	return (
		<Collapse in={open}>
			<Alert
				severity={typeAlert}
				variant={variant}
				color={typeAlert}
				className={classes.textColor}
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(!open);
							handle?.();
						}}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
			>
				{message}
				{children}
			</Alert>
		</Collapse>
	);
}

export default AlertCustom;
