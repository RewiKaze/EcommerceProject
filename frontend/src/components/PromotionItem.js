import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// Query Data
import {PROMOTION_QUERY} from "../graphql/promotionQuery";
import { useQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React from 'react';

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

const PromotionItem = () => {
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
            <Grid item xs={3}>
                <Card className={classes.root2}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image= {promo.imageUrl}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">
                                {promo.name}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h4">
                                CODE : {promo.code}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {promo.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        ))
    )
};
export default PromotionItem;
