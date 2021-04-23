import React from "react";
import {Grid, Button, Paper, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import PromotionDemo from "./Demo/PromotionDemo";
import PromotionItem from "./Adminpromotion/showPromotion";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const AdminPromotion = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <h1 style={{color:'#202C39'}}>PROMOTION <span><Button variant="contained" style={{backgroundColor:"#F2DC92"}}><AddIcon/> Create Promotion</Button></span></h1>
            <hr/>
            <Grid container spacing={3}>
                <PromotionItem/>
            </Grid>
        </React.Fragment>
    );
};

export default AdminPromotion;
