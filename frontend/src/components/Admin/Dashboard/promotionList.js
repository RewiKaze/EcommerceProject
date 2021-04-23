import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Card, CardActionArea, CardActions, CardContent, Button, Typography, Grid} from '@material-ui/core';
import {useQuery} from "@apollo/client";
import {PROMOTION_QUERY} from "../../../graphql/promotionQuery";

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
    root: {
        maxWidth: 345,
    },
}));
const PromotionList = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(PROMOTION_QUERY)
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }

    const promotionItem = () => {
        return(data?.promotions?.map((promo) => (
            <Grid item xs={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                             <span style={{color:'#F29559', fontWeight:'bold'}}>{promo.discount}% Sale off</span>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Product: {promo.product.name} <br/>
                            Price: <b>{promo.total}</b> <span style={{textDecoration:'line-through', fontSize:14}}>{promo.product.price}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" variant="contained">
                        Active: {promo.amount}
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        )))
    }
    return (
        <Paper className={classes.paper1}>
            <h3 style={{color:'white'}}>
                List Promotion
            </h3>
            <hr/>
            <Grid container spacing={3}>
                {promotionItem()}
            </Grid>
        </Paper>
    );
};

export default PromotionList;
