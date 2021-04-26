import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper1: {
        padding: theme.spacing(2),
        backgroundColor:"#202C39"
    },
}));

const OrderList = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper1} style={{color:'#F29559'}}>
            <h3 style={{color:'white'}}>Order List{'   '}
            <span>
                            <Link to={{
                                pathname: `/admin/orders`,
                            }} style={{ textDecoration: "none" }}>
                            <Button style={{backgroundColor:"#F29559", borderRadius:0}} size="small" variant="outlined">
                                See more
                            </Button>
                                </Link>
                        </span></h3>
            <hr/>
                <table style={{width:'100%', textAlign:'left', borderSpacing:"5px"}}>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>

                        {/*<th style={{ color:'white'}}>Date Added</th>*/}
                    </tr>

                </table>
        </Paper>
);
};

export default OrderList;
