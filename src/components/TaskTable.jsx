import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import { Button } from '@material-ui/core';

const columns = [
  { id: 'orden', label: 'N°', minWidth: 5 },
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 50 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 100,
    align: 'right',
  },
  {
    id: 'actions',
    label: 'Acciones',
    minWidth: 50,
    align: 'center',
  },
];

function createData(orden, name, code, population, size) {
  const density = population / size;
  return {
    orden,
    name,
    code,
    population,
    size,
    density,
    actions: (
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

const rows = [
  createData(1, 'India', 'IN', 1324171354, 3287263),
  createData(1, 'China', 'CN', 1403500365, 9596961),
  createData(1, 'Italy', 'IT', 60483973, 301340),
  createData(1, 'United States', 'US', 327167434, 9833520),
  createData(1, 'Canada', 'CA', 37602103, 9984670),
  createData(1, 'Australia', 'AU', 25475400, 7692024),
  createData(1, 'Germany', 'DE', 83019200, 357578),
  createData(1, 'Ireland', 'IE', 4857000, 70273),
  createData(1, 'Mexico', 'MX', 126577691, 1972550),
  createData(1, 'Japan', 'JP', 126317000, 377973),
  createData(1, 'France', 'FR', 67022000, 640679),
  createData(1, 'United Kingdom', 'GB', 67545757, 242495),
  createData(1, 'Russia', 'RU', 146793744, 17098246),
  createData(1, 'Nigeria', 'NG', 200962417, 923768),
  createData(1, 'Brazil', 'BR', 210147125, 8515767),
];

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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value.actions ? <>{value.actions}</> : <>{value}</>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default TaskTable;
