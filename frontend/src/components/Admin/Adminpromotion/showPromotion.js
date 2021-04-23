import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useQuery} from "@apollo/client";
import {PROMOTION_QUERY} from "../../../graphql/promotionQuery";
import {Button, Card, Grid} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

const PromotionItem = () =>  {
    const classes = useStyles();
    const { loading, error, data } = useQuery(PROMOTION_QUERY)
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    return (
        data?.promotions?.map((promo) => (
            <Grid item xs={8}>
                <Card className={classes.root}>
                    <Grid container spacing={3} style={{padding:5, backgroundColor:'rgb(242,242,247)'}}>
                        <Grid item xs={8}>
                            <h2 style={{textAlign:'right', justifyContent:'center', color:"#202C39"}}> <span style={{color:'#F29559'}}>{promo.discount}% Sale off</span> <span> | {promo.name}</span> </h2>
                            <hr/>
                            <p style={{textAlign:'right', justifyContent:'center', color:"#202C39", fontSize:19}}>Product: {promo.product.name} <br/>
                                Price: <b>{promo.total}</b> <span style={{textDecoration:'line-through', fontSize:14}}>{promo.product.price}
                            </span><br/> Active: <b>{promo.amount}</b>
                            </p>

                        </Grid>
                        <Grid item xs={4}>
                            <Grid container spacing={3} style={{padding:5, backgroundColor:'rgb(242,242,247)'}}>
                                <Grid item xs={12} >
                                    <Button size="small" color="primary" variant="contained">
                                        <EditIcon fontSize="small"/>Edit
                                    </Button>
                                    {'  '}
                                    <Button size="small" variant="outlined" style={{color:"red"}}>
                                        <DeleteIcon fontSize="small"/>Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
    )));
};
export default PromotionItem;
