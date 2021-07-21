import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

function ListTareasSelect({ classes, ...rest }) {
	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='especie-mascota-label'>Tareas</InputLabel>
			<Select labelId='especie-mascota-label' id='tareas' {...rest}>
				<MenuItem value='CONSULTA'>Consulta</MenuItem>
				<MenuItem value='CITA'>Cita</MenuItem>
				<MenuItem value='CIRUGIA'>Cirugía</MenuItem>
				<MenuItem value='VACUNA'>Vacuna</MenuItem>
				<MenuItem value='EXAMEN'>Exámen</MenuItem>
			</Select>
		</FormControl>
	);
}

export default ListTareasSelect;
