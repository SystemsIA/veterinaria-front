import { Fragment } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
	inputLabel: {
		display: 'flex',
		alignItems: 'center',
	},
	spanText: {
		fontSize: (props) => theme.typography.pxToRem(props.fontSize || 14),
	},
}));

function InputForm({
	icon: Icon,
	as: IC,
	label = '',
	idName = '',
	variant = 'outlined',
	color = 'primary',
	required,
	helperText = null,
	fontSize = 14,
	...rest
}) {
	const classes = useStyles({ fontSize });
	return (
		<FormControl required={required} variant={variant} color={color}>
			<InputLabel htmlFor={idName} className={classes.inputLabel}>
				{Icon ? <Icon /> : null}
				<span className={classes.spanText}>{label}</span>
			</InputLabel>
			<IC
				id={idName}
				aria-describedby={label}
				label={
					<Fragment>
						{Icon ? <Icon /> : null}
						<span className={classes.spanText}>{label}</span>
					</Fragment>
				}
				{...rest}
			/>
			{helperText ? <FormHelperText error>{helperText}</FormHelperText> : null}
		</FormControl>
	);
}

export default InputForm;
