import React from "react";
import {Grid, Button, Paper, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import TablePromotion from './Adminpromotion/TablePromotion'
import PromotionDemo from "./Demo/PromotionDemo";

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
                <Grid item xs={12}>
                    <TablePromotion/>
                </Grid>
                <Grid item xs={12}>
                    <PromotionDemo/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default AdminPromotion;
