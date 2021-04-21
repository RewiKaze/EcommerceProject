import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, GridList, GridListTile, GridListTileBar} from '@material-ui/core';
import {useQuery} from "@apollo/client";
import {PROMOTION_QUERY} from "../../../graphql/promotionQuery";

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
    gridList: {
        flexWrap: "nowrap",
        transform: "translateZ(0)",
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
                    <GridListTile key={promo.id}>
                        <img src={promo.imageUrl} alt={promo.name} />
                        <GridListTileBar title={promo.name} subtitle={promo.endDate} />
                    </GridListTile>
        )))
    }
    return (
        <Paper className={classes.paper1}>
            <h3 style={{color:'white'}}>
                List Promotion
            </h3>
            <hr/>
            <GridList className={classes.gridList} cols={4}>
                {promotionItem()}
            </GridList>
        </Paper>
    );
};

export default PromotionList;
