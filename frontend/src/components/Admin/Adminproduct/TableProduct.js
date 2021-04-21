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
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


export default function StickyHeadTable() {



    const columns = [
        { id: 'Photo', label: 'Photo', minWidth: 30 },
        { id: 'Name', label: 'Name', minWidth: 170 },
        { id: 'Category', label: 'Category', minWidth: 100 },
        { id: 'Price', label: 'Price', minWidth: 100 },
        { id: 'Status', label: 'Status', minWidth: 100 },
        { id: 'Edit', label: 'Edit', minWidth: 20 },
        { id: 'Delete', label: 'Delete', minWidth: 20 },

    ];

    function createData(Photo,Name, Category, Price, Status,Edit, Delete) {
        return { Photo,Name, Category, Price, Status,Edit, Delete };
    }

    const rows = [
        createData(<Avatar  alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'India', 'IN', 1324171354, 3287263,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton> ),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'China', 'CN', 1403500365, 9596961,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Italy', 'IT', 60483973, 301340,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'United States', 'US', 327167434, 9833520,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Canada', 'CA', 37602103, 9984670,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Australia', 'AU', 25475400, 7692024,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Germany', 'DE', 83019200, 357578,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Ireland', 'IE', 4857000, 70273,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Mexico', 'MX', 126577691, 1972550,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Japan', 'JP', 126317000, 377973,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'France', 'FR', 67022000, 640679,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'United Kingdom', 'GB', 67545757, 242495,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),
        createData(<Avatar alt="Remy Sharp" src="https://www.ikea.com/th/th/images/products/tufjord-upholstered-bed-frame-gunnared-blue__0859776_pe781093_s5.jpg?f=xxl" />,'Russia', 'RU', 146793744, 17098246,<IconButton><EditIcon fontSize="small" /></IconButton>, <IconButton><DeleteIcon fontSize="small" /></IconButton>),

    ];

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
