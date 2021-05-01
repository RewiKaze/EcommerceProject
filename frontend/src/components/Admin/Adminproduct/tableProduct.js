import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {PRODUCT_QUERY} from "../../../graphql/productQuery";
import {DELETE_PRODUCT_MUTATION} from "../../../graphql/deleteProduct";
import {useMutation, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import {Button, CardActions} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
const columns = [
    { field: 'id', headerName: 'ID', width: 230 },
    { field: 'name', headerName: 'Product', width: 180 },
    { field: 'type', headerName: 'Type', width: 130 },
    {   field: 'price', headerName: 'Price', type: 'number', width: 100,},
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'date', headerName: 'Date Added', width: 130 },
    { field: 'action', headerName: 'Action', width: 130 },

];



export default function DataGridDemo() {
    const { loading, error, data } = useQuery(PRODUCT_QUERY, { fetchPolicy: 'network-only' })
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    console.log(data)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={
                    data?.products?.map((product) =>({
                        id: product._id,
                        name: product.name,
                        type: product.type,
                        price: (parseInt(product.price)).toLocaleString('th-TH', {
                            style: 'currency',
                            currency: 'THB'
                        }) ?? "",
                        status:product.quantity >0 ?'In Stock'+'   '+'('+ product.quantity+')':"Out of Stock",
                        date: product.timestamp,
                        action:<>
                            <Link to={{
                            pathname: `/admin/product/${product._id}`,
                        }} style={{ textDecoration: "none" }}>
                            <Button size="small" color="primary" variant="contained">
                                <EditIcon fontSize="small"/>Edit
                            </Button>
                        </Link>
                    <Button size="small"  variant="outlined" style={{color:"red"}}
                            // onClick={() => removeProduct(product._id)}
                    >
                    <DeleteIcon fontSize="small"/>Delete
                    </Button></>


                    }))
                }
                columns={columns}
                pagination
                pageSize={10}
                // onRowClick={handleClick}
            />
        </div>
    );
}
