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
import {useQuery} from "@apollo/client";
import {PRODUCT_QUERY} from "../../../graphql/productQuery";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'type', label: 'Type', minWidth: 100 },
    { id: 'price', label: 'Price', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 100, align: 'center', },

];

function createData(name, type, price, status, action) {
    return { name, type, price, status, action };
}

// const rowsProduct = () => {
//     const {loading, error, data} = useQuery(PRODUCT_QUERY)
//     if (loading) {
//         return 'Loading ...'
//     }
//     if (error) {
//         return 'Error !!'
//     }
//     return (
//         data?.products?.map((product) => (
//             <p>f</p>
//         ))
//     )
// }

const rows = [
    createData('India', 'IN', 1324171354, 3287263,
        <div>
            <IconButton style={{color:'green'}} aria-label="upload picture" component="span">
                <VisibilityIcon />
            </IconButton>
        <IconButton color="primary" aria-label="upload picture" component="span">
        <EditIcon />
    </IconButton>
            <IconButton style={{color:'red'}} aria-label="upload picture" component="span">
                <DeleteForeverIcon />
            </IconButton>

        </div>

    ),
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
