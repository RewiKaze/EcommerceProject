import React from 'react'
import {Card, Button, Grid, CardActionArea, CardMedia, CardContent, Typography, CardActions} from '@material-ui/core';
// Query Data
import {PROMOTION_QUERY} from "../graphql/promotionQuery";
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: "100%",
    },
    media: {
        height: 140,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const PromotionItem = () => {
    const classes = useStyles();
    const { loading, error, data } = useQuery(PROMOTION_QUERY, { fetchPolicy: 'network-only' })
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    return (
        data?.promotions?.map((promo) => (
            <Grid item xs={3}>
                {promo.product._id ?<Card className={classes.root2}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={promo.product.imageUrl}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3" noWrap={true}>
                                {promo.name}
                            </Typography>
                            <Typography style={{color:'#f29559', fontSize:19}}>
                                {(parseInt(promo.total)).toLocaleString('th-TH', {
                                    style: 'currency',
                                    currency: 'THB'
                                }) ?? ""}{"     "}
                                <span style={{fontSize:14, color:"black", textDecoration:'line-through'}}>{(parseInt(promo.product.price)).toLocaleString('th-TH', {
                                    style: 'currency',
                                    currency: 'THB'
                                }) ?? ""}</span>
                            </Typography>
                            <Typography variant="body2" component="p" noWrap={true}>
                                Product: {promo.product.name}
                            </Typography>
                            <Typography variant="body2" component="p" noWrap={true} style={{color:"green"}}>
                                Available: {promo.amount}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="contained">
                            Add to cart
                        </Button>
                    </CardActions>
                </Card> :null}
                {/*<Card className={classes.root2}>*/}
                {/*    <CardActionArea>*/}
                {/*        <CardMedia*/}
                {/*            className={classes.media}*/}
                {/*            image={promo.product.imageUrl}*/}
                {/*            title="Contemplative Reptile"*/}
                {/*        />*/}
                {/*        <CardContent>*/}
                {/*            <Typography gutterBottom variant="h5" component="h3" noWrap={true}>*/}
                {/*                {promo.name}*/}
                {/*            </Typography>*/}
                {/*            <Typography style={{color:'#f29559', fontSize:19}}>*/}
                {/*                {(parseInt(promo.total)).toLocaleString('th-TH', {*/}
                {/*                    style: 'currency',*/}
                {/*                    currency: 'THB'*/}
                {/*                }) ?? ""}{"     "}*/}
                {/*                <span style={{fontSize:14, color:"black", textDecoration:'line-through'}}>{(parseInt(promo.product.price)).toLocaleString('th-TH', {*/}
                {/*                    style: 'currency',*/}
                {/*                    currency: 'THB'*/}
                {/*                }) ?? ""}</span>*/}
                {/*            </Typography>*/}
                {/*            <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>*/}
                {/*                Product: {promo.product.name}*/}
                {/*            </Typography>*/}
                {/*        </CardContent>*/}
                {/*    </CardActionArea>*/}
                {/*    <CardActions>*/}
                {/*        <Button size="small" color="primary">*/}
                {/*            Detail*/}
                {/*        </Button>*/}
                {/*        <Button size="small" color="primary" variant="contained">*/}
                {/*            Add to cart*/}
                {/*        </Button>*/}
                {/*    </CardActions>*/}
                {/*</Card>*/}
            </Grid>

        // data?.promotions?.map((promo) => (
        //     <Grid item xs={8}>
        //         {promo.product._id ?<Card className={classes.root}>
        //             <Grid container spacing={3} style={{padding:5, backgroundColor:'rgb(242,242,247)'}}>
        //                 <Grid item xs={8}>
        //                     <h2 style={{textAlign:'right', justifyContent:'center', color:"#202C39"}}> <span style={{color:'#F29559'}}>{promo.discount}% Sale off</span> <span> | {promo.name}</span> </h2>
        //                     <hr/>
        //                     <p style={{textAlign:'right', justifyContent:'center', color:"#202C39", fontSize:19}}>Product: {promo.product.name} <br/>
        //                         Price: <b>{promo.total}</b> <span style={{textDecoration:'line-through', fontSize:14}}>{promo.product.price}</span>
        //                     </p>
        //
        //                 </Grid>
        //                 <Grid item xs={4}>
        //                     <Grid container spacing={3} style={{padding:5, backgroundColor:'rgb(242,242,247)'}}>
        //                         <Grid item xs={12} >
        //                             <Button variant="outlined" style={{color:'#202C39'}}>
        //                                 Detail
        //                             </Button>
        //                         </Grid>
        //                         <Grid item xs={12}>
        //                             <Button variant="contained" style={{backgroundColor:"#F29559", color:'white'}}>
        //                                 Add to Cart
        //                             </Button>
        //                         </Grid>
        //                     </Grid>
        //                 </Grid>
        //             </Grid>
        //         </Card>:null}
        //         {/*<Card className={classes.root}>*/}
        //         {/*    <Grid container spacing={3} style={{padding:5, backgroundColor:'rgb(242,242,247)'}}>*/}
        //         {/*        <Grid item xs={8}>*/}
        //         {/*            <h2 style={{textAlign:'right', justifyContent:'center', color:"#202C39"}}> <span style={{color:'#F29559'}}>{promo.discount}% Sale off</span> <span> | {promo.name}</span> </h2>*/}
        //         {/*            <hr/>*/}
        //         {/*            <p style={{textAlign:'right', justifyContent:'center', color:"#202C39", fontSize:19}}>Product: {promo.product.name} <br/>*/}
        //         {/*                Price: <b>{promo.total}</b> <span style={{textDecoration:'line-through', fontSize:14}}>{promo.product.price}</span>*/}
        //         {/*            </p>*/}
        //
        //         {/*        </Grid>*/}
        //         {/*        <Grid item xs={4}>*/}
        //         {/*            <Grid container spacing={3} style={{padding:5, backgroundColor:'rgb(242,242,247)'}}>*/}
        //         {/*                <Grid item xs={12} >*/}
        //         {/*                    <Button variant="outlined" style={{color:'#202C39'}}>*/}
        //         {/*                        Detail*/}
        //         {/*                    </Button>*/}
        //         {/*                </Grid>*/}
        //         {/*                <Grid item xs={12}>*/}
        //         {/*                    <Button variant="contained" style={{backgroundColor:"#F29559", color:'white'}}>*/}
        //         {/*                        Add to Cart*/}
        //         {/*                    </Button>*/}
        //         {/*                </Grid>*/}
        //         {/*            </Grid>*/}
        //         {/*        </Grid>*/}
        //         {/*    </Grid>*/}
        //         {/*</Card>*/}
        //     </Grid>
        ))
    )
};
export default PromotionItem;
