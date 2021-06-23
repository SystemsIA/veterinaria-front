import React from 'react';
import { Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';

export const columns = [
	{ id: 'orden', label: 'N°', minWidth: 5 },
	{ id: 'tarea', label: 'Tarea', minWidth: 100 },
	{ id: 'fecha', label: 'Fecha', minWidth: 50 },
	{
		id: 'hora',
		label: 'Hora',
		minWidth: 50,
		align: 'right',
	},
	{
		id: 'cliente',
		label: 'Cliente',
		minWidth: 100,
		align: 'right',
	},
	{
		id: 'mascota',
		label: 'Mascota',
		minWidth: 100,
		align: 'right',
	},
	{
		id: 'detalles',
		label: 'Detalles',
		minWidth: 100,
		align: 'right',
	},
	{
		id: 'acciones',
		label: 'Acciones',
		minWidth: 50,
		align: 'center',
	},
];

export function createData(
	orden,
	tarea,
	fecha,
	hora,
	cliente,
	mascota,
	detalles
) {
	return {
		orden,
		tarea,
		fecha,
		hora,
		detalles,
		mascota,
		cliente,
		acciones: (
			<React.Fragment>
				<Button size="small" color="primary" style={{ minWidth: 10 }}>
					<SettingsIcon fontSize="small" />
				</Button>
				<Button size="small" color="secondary" style={{ minWidth: 10 }}>
					<DeleteIcon fontSize="small" />
				</Button>
			</React.Fragment>
		),
	};
}

export const rows = [
	createData(
		1,
		'Tarea 1',
		'12-02-2021',
		'3:30',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		2,
		'Tarea 2',
		'12-02-2021',
		'12:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		3,
		'Tarea 3',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		4,
		'Tarea 4',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		5,
		'Tarea 5',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		6,
		'Tarea 6',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		7,
		'Tarea 7',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		8,
		'Tarea 8',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		9,
		'Tarea 9',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
	createData(
		10,
		'Tarea 1',
		'12-02-2021',
		'15:23',
		'Cliente 1',
		'Mascota 1',
		'Detalles'
	),
];
