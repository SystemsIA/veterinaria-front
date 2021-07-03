import { Fragment } from 'react';
import {
	FormControl,
	InputLabel,
	makeStyles,
	FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	inputLabel: {
		display: 'flex',
		alignItems: 'center',
	},
}));

function InputForm({
	icon: Icon,
	as: IC,
	type = 'text',
	label = '',
	idName = '',
	variant = 'outlined',
	color = 'primary',
	name = '',
	required,
	helperText = null,
	...rest
}) {
	const classes = useStyles();
	return (
		<FormControl required={required} variant={variant} color={color}>
			<InputLabel htmlFor={idName} className={classes.inputLabel}>
				{Icon ? <Icon /> : null} <span>{label}</span>
			</InputLabel>
			<IC
				id={idName}
				aria-describedby={label}
				name={name}
				type={type}
				{...rest}
				label={
					<Fragment>
						{Icon ? <Icon /> : null}
						{label}
					</Fragment>
				}
			/>
			{helperText ? <FormHelperText error>{helperText}</FormHelperText> : null}
		</FormControl>
	);
}

export default InputForm;
