import { TextField } from '@material-ui/core';

function MedicoTareaVacuna() {
	return (
		<form>
			<TextField
				id='vaccine-name'
				label='Nombre'
				variant='outlined'
				color='secondary'
			/>
			<TextField
				id='disease'
				label='Enfermedad'
				variant='outlined'
				color='secondary'
			/>
			<TextField
				id='description-disease'
				label='Descripción de la Enfermedad'
				variant='outlined'
				color='secondary'
			/>
			<TextField
				id='breed-animal'
				label='Raza del perro'
				variant='outlined'
				color='secondary'
			/>
		</form>
	);
}

export default MedicoTareaVacuna;
