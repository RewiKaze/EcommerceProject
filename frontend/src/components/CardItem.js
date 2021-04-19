import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../image/logo.png";
import Chip from '@material-ui/core/Chip';

// Query Data
import { PRODUCT_QUERY } from "../graphql/productQuery";
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import {Divider} from "@material-ui/core";

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
                          <Typography style={{color:'orange', fontSize:19}}>
                              ฿{product.price}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              {product.description}
                          </Typography>Tags:{'   '}
                              <Chip size="small" label={product.tags[0]} />{'   '}
                              <Chip size="small" label={product.tags[1]} />
                      </CardContent>
                  </CardActionArea>
                  <CardActions>
                      <Button size="small" color="primary">
                          Detail
                      </Button>
                      <Button size="small" color="primary" variant="contained">
                          Add to cart
                      </Button>
                  </CardActions>
              </Card>
          </Grid>
      ))
  )
};
export default CardItem;
