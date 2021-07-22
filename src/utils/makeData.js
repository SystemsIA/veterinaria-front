import React from 'react';
import { Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonLink from 'components/ui/ButtonLink';

export const columns = [
	// { id: 'id', label: 'N°', minWidth: 5 },
	{ id: 'email', label: 'Correo', minWidth: 100 },
	{ id: 'nombre', label: 'Nombre', minWidth: 50 },
	{
		id: 'direccion',
		label: 'Direccion',
		minWidth: 50,
		// align: 'right',
	},
	{
		id: 'telefono',
		label: 'Teléfono',
		minWidth: 100,
		// align: 'right',
	},
	{
		id: 'dni',
		label: 'DNI',
		minWidth: 100,
		// align: 'right',
	},
	{
		id: 'mascotas',
		label: 'Mascotas',
		minWidth: 70,
		align: 'center',
	},
	{
		id: 'acciones',
		label: 'Acciones',
		minWidth: 50,
		align: 'center',
	},
];

function createData({ id, email, nombre, direccion, telefono, dni }) {
	return {
		id,
		email,
		nombre,
		direccion,
		telefono,
		dni,
		mascotas: (
			<ButtonLink
				text='Mascotas'
				to={`/medico/clientes/${id}/mascotas`}
				color='secondary'
				variant='contained'
			/>
		),
		acciones: (
			<React.Fragment>
				<Button size='small' color='primary' style={{ minWidth: 10 }}>
					<SettingsIcon fontSize='small' />
				</Button>
				<Button size='small' color='secondary' style={{ minWidth: 10 }}>
					<DeleteIcon fontSize='small' />
				</Button>
			</React.Fragment>
		),
	};
}
export function parseListCliente(clientes) {
	return clientes.map((cli) => createData({ ...cli }));
}

// Tareas o historial
export const columnsTareas = [
	{ id: 'id', label: 'N°', minWidth: 5 },
	{ id: 'tarea', label: 'Tarea', minWidth: 100 },
	// { id: 'nombre', label: 'Nombre', minWidth: 50 },
	{
		id: 'peso',
		label: 'Peso',
		minWidth: 50,
		// align: 'right',
	},
	{
		id: 'examen',
		label: 'Exámen',
		minWidth: 100,
		// align: 'right',
	},
	{
		id: 'talla',
		label: 'Talla',
		minWidth: 100,
		// align: 'right',
	},
	{
		id: 'internado',
		label: 'Internado',
		minWidth: 70,
		align: 'center',
	},
	{
		id: 'temperatura',
		label: 'Temperatura',
		minWidth: 70,
		align: 'center',
	},
	{
		id: 'diagnostico',
		label: 'Diagnóstico',
		minWidth: 70,
		align: 'center',
	},
	{
		id: 'recetaMedica',
		label: 'Receta Médica',
		minWidth: 70,
		align: 'center',
	},
	{
		id: 'acciones',
		label: 'Acciones',
		minWidth: 50,
		align: 'center',
	},
];

function createDataTarea({
	id,
	tarea,
	peso,
	examen,
	talla,
	internado,
	temperatura,
	diagnostico,
	recetaMedica,
}) {
	return {
		id,
		tarea,
		peso,
		examen,
		talla,
		internado: internado ? 'Si' : 'No',
		temperatura,
		diagnostico,
		recetaMedica,
		acciones: (
			<React.Fragment>
				<Button size='small' color='primary' style={{ minWidth: 10 }}>
					<SettingsIcon fontSize='small' />
				</Button>
				<Button size='small' color='secondary' style={{ minWidth: 10 }}>
					<DeleteIcon fontSize='small' />
				</Button>
			</React.Fragment>
		),
	};
}
export function parseListTarea(tareas) {
	return tareas.map((tar) => createDataTarea({ ...tar }));
}
