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
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'condition', label: 'Condition', minWidth: 100 },
    { id: 'code', label: 'Code', minWidth: 50 },
    { id: 'quantity', label: 'Quantity', minWidth: 50 },
    { id: 'exp', label: 'Exp. Date', minWidth: 50 },
    { id: 'Edit', label: 'Edit', minWidth: 20 },
    { id: 'Delete', label: 'Delete', minWidth: 20 },

];

function createData(name, condition, code, quantity, exp, Edit, Delete) {
    return { name, condition, code, quantity, exp, Edit, Delete };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263, '20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton> ),
    createData('China', 'CN', 1403500365, 9596961,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Italy', 'IT', 60483973, 301340,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('United States', 'US', 327167434, 9833520,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Canada', 'CA', 37602103, 9984670,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Australia', 'AU', 25475400, 7692024,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Germany', 'DE', 83019200, 357578,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Ireland', 'IE', 4857000, 70273,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Mexico', 'MX', 126577691, 1972550,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Japan', 'JP', 126317000, 377973,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('France', 'FR', 67022000, 640679,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('United Kingdom', 'GB', 67545757, 242495,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Russia', 'RU', 146793744, 17098246,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Nigeria', 'NG', 200962417, 923768,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
    createData('Brazil', 'BR', 210147125, 8515767,'20/06/2021', <IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable() {
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
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
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
