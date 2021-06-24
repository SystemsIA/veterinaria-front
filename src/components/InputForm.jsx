import { Fragment } from 'react';
import { FormControl, InputLabel, makeStyles } from '@material-ui/core';

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
				label={
					<Fragment>
						{Icon ? <Icon /> : null}
						{label}
					</Fragment>
				}
			/>
		</FormControl>
	);
}

export default InputForm;
