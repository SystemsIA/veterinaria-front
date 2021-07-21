import { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// // utils
import { columns, parseListCliente } from 'utils/makeData';
import useClient from 'hooks/useClient';
import useClientStore from 'app/clientStore';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	container: {
		maxHeight: '100%', // Customize size table
	},
	headerTable: {
		background: theme.palette.primary.light,
		fontWeight: 'bold',
	},
}));

function TableCliente() {
	const classes = useStyles();
	const cliente = useClient();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	const clientesRef = useRef(useClientStore.getState().clientes);
	useEffect(
		() =>
			useClientStore.subscribe(
				(clientes) => (clientesRef.current = clientes),
				(state) => state.clientes
			),
		[]
	);

	useEffect(() => {
		cliente.listClientesAction();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Paper className={classes.root} elevation={0}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									key={column.id}
									className={classes.headerTable}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{parseListCliente(clientesRef.current)
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => (
								<TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
									{columns.map((column) => {
										const value = row[column.id];
										return (
											<TableCell key={column.id} align={column.align}>
												{value}
											</TableCell>
										);
									})}
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 15, 25, 100]}
				component='div'
				count={cliente.clientes.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}

export default TableCliente;
