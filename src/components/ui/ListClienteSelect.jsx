import { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import useClient from 'hooks/useClient';

function ListClienteSelect({ classes, ...rest }) {
	const cliente = useClient();

	useEffect(() => {
		(async () => {
			await cliente.listClientesAction();
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<FormControl className={classes.formControl}>
			<InputLabel id='especie-mascota-label'>Cliente</InputLabel>
			<Select labelId='especie-mascota-label' id='especia' {...rest}>
				{cliente.clientes.map((cli) => (
					<MenuItem key={cli.id} value={cli.id} className='list__select'>
						<div className='list__item-content'>
							<span className='list__item'>{cli.nombre}</span>
							<span className='list__item'>{cli.email}</span>
						</div>
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default ListClienteSelect;
