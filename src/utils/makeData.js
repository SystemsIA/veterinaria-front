import React from 'react';
import { Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonLink from 'components/ui/ButtonLink';

// ['N°', 'Correo', 'Nombre', 'Dirección', , 'Telefono', 'Mascotas'];

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

export function createData({ id, email, nombre, direccion, telefono, dni }) {
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
