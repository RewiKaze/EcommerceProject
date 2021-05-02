import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Query Data
import { PRODUCT_QUERY } from "../../graphql/productQuery";
import { useQuery } from '@apollo/client'
import {useSession} from "../../contexts/SessionContext";
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


const CardItem = () => {
    const classes = useStyles();
    const { addProductToCart} = useSession();
    const { loading, error, data } = useQuery(PRODUCT_QUERY, { fetchPolicy: 'network-only' })

    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }

    const handleAddCart = (id) => {
        // console.log(id, cart);
        // if (cart?.find((each) => each.id === id)) {
        //   const result = {
        //     id: id,
        //     amount: cart[cart.indexOf(id)].amount + 1,
        //   };
        //   addProductToCart(result);
        // } else {
        const result = {
            id: id,
            amount: 1,
        };
        addProductToCart(result);
    };

    return (
        data?.products?.slice(0, 8).map((product) => (
            <Grid item xs={3}>
                <Card className={classes.root2}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={product.imageUrl}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">
                                {product.name}
                            </Typography>
                            <Typography style={{color:'#f29559', fontSize:19}}>
                                {(parseInt(product.price)).toLocaleString('th-TH', {
                                    style: 'currency',
                                    currency: 'THB'
                                }) ?? ""}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" noWrap={true}>
                                {product.description}
                            </Typography>
                            {/*<Typography variant="body2" color="textSecondary" component="p">*/}
                            {/*    Tags:{product.tag}*/}
                            {/*</Typography>*/}

                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        <Button size="small" color="primary" variant="contained"
                                onClick={() => {
                                    handleAddCart(product._id);
                                }}
                        >
                            Add to cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        ))
    )
}
export default CardItem;
