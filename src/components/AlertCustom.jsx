import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
	textColor: {
		color: red['300'],
	},
}));

function AlertCustom({
	typeAlert = 'info',
	variant = 'filled',
	message = '',
	handler = undefined,
}) {
	const classes = useStyles();
	const [open, setOpen] = useState(true);

	return (
		<div className={classes.root}>
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
								handler?.();
							}}
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>
					}
				>
					{message}
				</Alert>
			</Collapse>
		</div>
	);
}

export default AlertCustom;
