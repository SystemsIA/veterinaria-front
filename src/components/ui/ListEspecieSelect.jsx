import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function ListEspecieSelect({ classes, ...rest }) {
	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='especie-mascota-label'>Especie</InputLabel>
			<Select
				defaultValue={1}
				labelId='especie-mascota-label'
				value={1}
				{...rest}
			>
				{['Felino', 'Canino', 'Ave', 'Acuatico', 'Roedor', 'Ganado'].map(
					(especie, index) => (
						<MenuItem key={`${especie}-${index}`} value={index + 1}>
							{especie}
						</MenuItem>
					)
				)}
			</Select>
		</FormControl>
	);
}

export default ListEspecieSelect;
