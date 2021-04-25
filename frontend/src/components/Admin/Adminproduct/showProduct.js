import React, {useMemo,useCallback} from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

// Query Data
import { PRODUCT_QUERY } from "../../../graphql/productQuery";
import {useQuery} from "@apollo/client";


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
    const { loading, error, data } = useQuery(PRODUCT_QUERY)
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }

    return (
        data?.products?.map((product) => (
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
                        <Link to={{
                            pathname: `/admin/product/${product._id}`,
                        }} style={{ textDecoration: "none" }}>
                        <Button size="small" color="primary" variant="contained">
                            <EditIcon fontSize="small"/>Edit
                        </Button>
                        </Link>
                        <Button size="small" variant="outlined" style={{color:"red"}}>
                            <DeleteIcon fontSize="small"/>Delete
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        ))
    )
}
export default CardItem;
