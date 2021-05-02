import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useQuery} from "@apollo/client";
import {ORDER_QUERY} from "../../../graphql/orderQuery";
import {useSession} from "../../../contexts/SessionContext";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: '2rem',
        height: '80vh',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Order = () => {
    const classes = useStyles();
    const { user } = useSession();
    const OrderData = () => {
        const {loading, error, data} = useQuery(ORDER_QUERY, { fetchPolicy: 'network-only' })
        if (loading) {
            return 'Loading ...'
        }
        if (error) {
            return 'Error !!'
        }
        if (user) {
        return (
            data?.orders?.map((order) => (
                <tr style={{textAlign:"left"}}>
                    {/*{order.user._id === user._id?*/}
                    <td>{order.user._id === user._id ? order._id: ""}</td>
                    <td>{order.user._id === user._id ? order.user._id === user._id && order.status === "INCOMPLETE"?<b style={{color:'lightsalmon'}}>INCOMPLETE</b>
                        : order.status === "CANCEL"? <b style={{color:'red'}}>CANCELED</b>
                            : <b style={{color:'lightgreen'}}>COMPLETED</b>: ""}</td>
                    <td>{order.user._id === user._id ?
                        <Link
                            to={{
                                pathname: `/customer/order/${order._id}`,
                            }}
                            style={{ textDecoration: "none" }}
                        >
                        <Button variant="contained">View</Button>
                        </Link>
                        : ""}
                        </td>
                        {/*:null}*/}
                </tr>

            ))
        )
    }}

    return (

        <Grid item xs={9}>
            <Paper className={classes.paper}>
                <span style={{ fontWeight: '700', color: '#202C39' }}>My Order</span>
                <hr/>
                <table style={{width:'100%', textAlign:'left', borderSpacing:"5px"}}>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>View Detail</th>
                    </tr>
                    {OrderData()}

                </table>
                {/*<hr style={{ height: '0.005rem', backgroundColor: '#E5E5E5', borderWidth: '0', margin: '1rem' }}></hr>*/}
                {/*<div style={{ padding: '1rem' }}>*/}
                {/*    <div style={{ display: 'flex', justifyContent: 'left' }}>*/}
                {/*        <span>Show: </span>*/}
                {/*        <FormControl variant="outlined" className={classes.formControl} style={{ width: '20%' }}>*/}
                {/*            <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>*/}
                {/*            <Select*/}
                {/*                labelId="demo-simple-select-outlined-label"*/}
                {/*                id="demo-simple-select-outlined"*/}
                {/*                value={sort}*/}
                {/*                onChange={handleChange}*/}
                {/*            >*/}
                {/*                <MenuItem value="">*/}
                {/*                    <em>All</em>*/}
                {/*                </MenuItem>*/}
                {/*                <MenuItem value={10}>Today</MenuItem>*/}
                {/*                <MenuItem value={20}>Last 5 orders</MenuItem>*/}
                {/*                <MenuItem value={30}>Last 1 month</MenuItem>*/}
                {/*            </Select>*/}
                {/*        </FormControl>*/}
                {/*    </div>*/}
                {/*    <div id="myorder1">*/}
                {/*        <div id="order1" style={{ display: 'flex', justifyContent: 'space-around' }}>*/}
                {/*            <div id="product1" style={{ display: 'flex', alignContent: 'flex-start', width: '100%', padding: '1rem' }}>*/}
                {/*                <img src={product1} style={{ width: '7rem' }} />*/}
                {/*                <div style={{ textAlign: 'left', marginLeft: '1rem' }}>*/}
                {/*                    <span style={{ fontWeight: '600', color: '#202C39' }}>ตู้หนังสือ ขนาด 80 ซม. รุ่น Lybrary สีขาว</span><br></br>*/}
                {/*                    <span style={{ fontWeight: '600', color: '#202C39' }}>X1</span><br></br>*/}
                {/*                    <span style={{ fontWeight: '600', color: '#F29559' }}>Delivered on 17 Jan 2021</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}>*/}
                {/*                <span style={{ fontWeight: '600', color: '#202C39' }}>$39</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div id="order1" style={{ display: 'flex', justifyContent: 'space-around' }}>*/}
                {/*            <div id="product2" style={{ display: 'flex', alignContent: 'flex-start', width: '100%', padding: '1rem' }}>*/}
                {/*                <img src={product2} style={{ width: '7rem' }} />*/}
                {/*                <div style={{ textAlign: 'left', marginLeft: '1rem' }}>*/}
                {/*                    <span style={{ fontWeight: '600', color: '#202C39' }}>Sofa very sofe sofe 200x200 cm Brown</span><br></br>*/}
                {/*                    <span style={{ fontWeight: '600', color: '#202C39' }}>X1</span><br></br>*/}
                {/*                    <span style={{ fontWeight: '600', color: '#F29559' }}>Delivered on 17 Jan 2021</span>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div style={{ alignSelf: 'flex-end', justifySelf: 'flex-end' }}>*/}
                {/*                <span style={{ fontWeight: '600', color: '#202C39' }}>$39</span>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <span id="total" style={{ fontWeight: '700', fontSize: '2.3rem', display: 'flex', justifyContent: 'flex-end', color: '#202C39' }}>Total $78</span>*/}
                {/*        <hr style={{ height: '0.005rem', backgroundColor: '#E5E5E5', borderWidth: '0', margin: '1rem' }}></hr>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Paper>
        </Grid>

    );
}
export default Order;