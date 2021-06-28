// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';

// // utils
// import { columns, rows } from '../utils/fakeData';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		width: '100%',
// 	},
// 	container: {
// 		maxHeight: '100%', // Customize size table
// 	},
// 	headerTable: {
// 		background: theme.palette.primary.light,
// 		fontWeight: 'bold',
// 	},
// }));

// function TaskTable() {
// 	const classes = useStyles();
// 	const [page, setPage] = useState(0);
// 	const [rowsPerPage, setRowsPerPage] = useState(5);

// 	const handleChangePage = (event, newPage) => {
// 		setPage(newPage);
// 	};

// 	const handleChangeRowsPerPage = (event) => {
// 		setRowsPerPage(+event.target.value);
// 		setPage(0);
// 	};

// 	return (
// 		<Paper className={classes.root} elevation={0}>
// 			<TableContainer className={classes.container}>
// 				<Table stickyHeader aria-label="sticky table">
// 					<TableHead>
// 						<TableRow>
// 							{columns.map((column) => (
// 								<TableCell
// 									key={column.id}
// 									className={classes.headerTable}
// 									align={column.align}
// 									style={{ minWidth: column.minWidth }}
// 								>
// 									{column.label}
// 								</TableCell>
// 							))}
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>
// 						{rows
// 							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// 							.map((row) => (
// 								<TableRow hover role="checkbox" tabIndex={-1} key={row.orden}>
// 									{columns.map((column) => {
// 										const value = row[column.id];
// 										return (
// 											<TableCell key={column.id} align={column.align}>
// 												{value}
// 											</TableCell>
// 										);
// 									})}
// 								</TableRow>
// 							))}
// 					</TableBody>
// 				</Table>
// 			</TableContainer>
// 			<TablePagination
// 				rowsPerPageOptions={[5, 15, 25, 100]}
// 				component="div"
// 				count={rows.length}
// 				rowsPerPage={rowsPerPage}
// 				page={page}
// 				onChangePage={handleChangePage}
// 				onChangeRowsPerPage={handleChangeRowsPerPage}
// 			/>
// 		</Paper>
// 	);
// }

// export default TaskTable;
import { useState, useMemo } from 'react';
import EnhancedTable from 'components/table/EnhancedTable';
import makeData from 'utils/makeFakeData';

function TaskTable() {
	const columns = useMemo(
		() => [
			{
				Header: 'First Name',
				accessor: 'firstName',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
			},
			{
				Header: 'Age',
				accessor: 'age',
			},
			{
				Header: 'Visits',
				accessor: 'visits',
			},
			{
				Header: 'Status',
				accessor: 'status',
			},
			// {
			// 	Header: 'Profile Progress',
			// 	accessor: 'progress',
			// },
		],
		[]
	);

	const [data, setData] = useState(useMemo(() => makeData(20), []));
	const [skipPageReset, setSkipPageReset] = useState(false);

	// We need to keep the table from resetting the pageIndex when we
	// Update data. So we can keep track of that flag with a ref.

	// When our cell renderer calls updateMyData, we'll use
	// the rowIndex, columnId and new value to update the
	// original data
	const updateMyData = (rowIndex, columnId, value) => {
		// We also turn on the flag to not reset the page
		setSkipPageReset(true);
		setData((old) =>
			old.map((row, index) => {
				if (index === rowIndex) {
					return {
						...old[rowIndex],
						[columnId]: value,
					};
				}
				return row;
			})
		);
	};

	return (
		<EnhancedTable
			columns={columns}
			data={data}
			setData={setData}
			updateMyData={updateMyData}
			skipPageReset={skipPageReset}
		/>
	);
}

export default TaskTable;
