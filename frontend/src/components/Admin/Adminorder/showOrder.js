import React, {useMemo, useCallback, useState} from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

// Query Data
import {DELETE_ORDER_MUTATION} from "../../../graphql/deleteOrder";
import { ORDER_QUERY} from "../../../graphql/orderQuery";
import {useMutation, useQuery} from "@apollo/client";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root2: {
        maxWidth: 345,
        borderRadius:0
    },
    media: {
        height: 140,

    },
}));


const OrderItem = (props) => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(ORDER_QUERY, { fetchPolicy: 'network-only' })
    const [deleteOrder] = useMutation(DELETE_ORDER_MUTATION)
    const removeProduct = async (id) =>{
        try{
            await deleteOrder({variables:{id}, refetchQueries: [{ query: ORDER_QUERY }]})
            alert("Delete Order Success")
        }catch (err){
            console.log(err)
            alert("Delete Order Failed")
        }
    }

    // const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION)
    // const removeProduct = async (id) =>{
    //     try{
    //         await deleteProduct({variables:{id}, refetchQueries: [{ query: PRODUCT_QUERY }]})
    //         alert("Delete Product Success")
    //     }catch (err){
    //         console.log(err)
    //         alert("Delete Product Failed")
    //     }
    // }

    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    // console.log(productId)


    return (
        data?.orders?.map((order) => (
            <Grid item xs={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="h2">
                                Order ID: {order._id}
                            </Typography>
                            <hr/>
                            <Typography variant="body2" component="p">
                                Total: {(parseInt(order.total)).toLocaleString('th-TH', {
                                style: 'currency',
                                currency: 'THB'
                            }) ?? ""}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Status : {order.status == "INCOMPLETE"?<b style={{color:'lightsalmon'}}>INCOMPLETE</b>
                                : order.status == "CANCEL"? <b style={{color:'red'}}>CANCELED</b>
                                : <b style={{color:'green'}}>COMPLETED</b>}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small"  variant="contained" style={{backgroundColor:"green", color:"white"}}>
                                            <CheckIcon fontSize="small"/>Confirm
                                        </Button>
                        <Button size="small"  variant="contained" style={{backgroundColor:"red", color:"white"}}>
                                        <CloseIcon fontSize="small"/>Cancel
                                    </Button>
                        <Button size="small"  variant="outlined" style={{color:"red"}} onClick={() => removeProduct(order._id)}>
                            <DeleteIcon fontSize="small"/>Delete
                        </Button>
                    </CardActions>
                </Card>
                {/*<Card className={classes.root2}>*/}
                {/*    <CardActionArea>*/}
                {/*        <CardContent>*/}
                {/*            <Typography gutterBottom variant="h5" component="h3">*/}
                {/*                {order._id}*/}
                {/*            </Typography>*/}
                {/*            <Typography style={{color:'#f29559', fontSize:19}}>*/}
                {/*                {(parseInt(order.total)).toLocaleString('th-TH', {*/}
                {/*                    style: 'currency',*/}
                {/*                    currency: 'THB'*/}
                {/*                }) ?? ""}*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>*/}
                {/*                {order.productsID}*/}
                {/*            </Typography>*/}
                {/*            /!*<Typography variant="body2" color="textSecondary" component="p">*!/*/}
                {/*            /!*    Tags:{product.tag}*!/*/}
                {/*            /!*</Typography>*!/*/}
                {/*        </CardContent>*/}
                {/*    </CardActionArea>*/}
                {/*    <CardActions>*/}
                {/*            <Button size="small"  variant="contained" style={{backgroundColor:"green", color:"white"}}>*/}
                {/*                <CheckIcon fontSize="small"/>Confirm*/}
                {/*            </Button>*/}
                {/*        <Button size="small"  variant="contained" style={{backgroundColor:"red", color:"white"}}>*/}
                {/*            <CloseIcon fontSize="small"/>Cancel*/}
                {/*        </Button>*/}
                {/*    </CardActions>*/}
                {/*</Card>*/}
            </Grid>
        ))
    )
}
export default OrderItem;
