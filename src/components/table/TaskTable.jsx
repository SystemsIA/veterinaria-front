// Hooks
import { useState } from 'react';
import useClient from 'hooks/useClient';
import useMounted from 'hooks/useMounted';

// Components
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

// utils
import { columnsTareas, parseListTarea } from 'utils/makeData';
import { makeStyles } from '@material-ui/core/styles';

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

function TaskTable() {
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

	useMounted(async () => {
		await cliente.historiasListAction();
	});

	return (
		<Paper className={classes.root} elevation={2}>
			<TableContainer className={classes.container}>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							{columnsTareas.map((column) => (
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
						{parseListTarea(cliente.tareas)
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row) => (
								<TableRow
									hover
									role='checkbox'
									tabIndex={-1}
									key={'task-row-' + row.id}
								>
									{columnsTareas.map((column) => {
										const value = row[column.id];

										return (
											<TableCell
												key={'task-col-' + column.id}
												align={column.align}
											>
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
				count={cliente.tareas.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}

export default TaskTable;
