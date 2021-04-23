import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import {useQuery} from "@apollo/client";
import {PROMOTION_QUERY} from "../../../graphql/promotionQuery";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
