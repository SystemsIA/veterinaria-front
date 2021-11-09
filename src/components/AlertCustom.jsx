import { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';

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

function AlertCustom({
	typeAlert = 'info',
	variant = 'filled',
	message,
	onClick = undefined,
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
						aria-label='close'
						color='inherit'
						size='small'
						onClick={() => {
							setOpen(!open);
							onClick?.();
						}}
					>
						<CloseIcon fontSize='inherit' />
					</IconButton>
				}
			>
				{message instanceof Array ? (
					<Box flexDirection='column' className={classes.textColor}>
						{message.map((m, index) => (
							<p key={`msg-alert-${index}`}>{m}</p>
						))}
					</Box>
				) : (
					message
				)}
				{children}
			</Alert>
		</Collapse>
	);
}

export default AlertCustom;
