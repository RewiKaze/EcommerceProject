import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
}));

const OrderList = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper1}><h3 style={{color:'white'}}>Order List</h3>
            <hr/>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
            <Paper style={{backgroundColor:'white',padding:8, marginBottom:8 }}>order1</Paper>
        </Paper>
);
};

export default OrderList;
