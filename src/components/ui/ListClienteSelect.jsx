import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

//Hooks
import useClient from 'hooks/useClient';
import useMounted from 'hooks/useMounted';

function ListClienteSelect({ classes, ...rest }) {
	const cliente = useClient();

	useMounted(async () => {
		await cliente.listClientesAction();
	});

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
