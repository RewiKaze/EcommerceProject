import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Fragment, Suspense } from "react";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import "./User-Component.css";
import proflie from "./image/proflie.png";
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import Button from '@material-ui/core/Button';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import {useSession} from "../../contexts/SessionContext";

const Account = React.lazy(() => import("./page/User-Account"));
const Address = React.lazy(() => import("./page/User-Address"));
const Order = React.lazy(() => import("./page/User-Order"));
const OrderID = React.lazy(() => import("./page/User-OrderID"));

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

const User = () => {
    const classes = useStyles();
    const { user, logout: handleLogout } = useSession();
    if (user) {
    return (
        <React.Fragment>
            <div className={classes.root} style={{ display: 'flex' }}>
                <Grid item xs={3}>
                    <Paper className={classes.paper} style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#E5E5E5", boxShadow: '0 0' }}>
                        <h1>My Profile</h1>
                        {/*<div style={{ display: 'flex' }}>*/}
                        {/*    <div>*/}
                        {/*        <Avatar>{user?.name[0].toUpperCase()}</Avatar>*/}
                        {/*        /!*<img src={proflie} style={{ width: "4.5rem" }} />*!/*/}
                        {/*    </div>*/}
                        {/*    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "1rem", textAlign: "left" }}>*/}
                        {/*        <p className="head-title">{user?.name}</p>*/}
                        {/*        /!*<Link href="#">*!/*/}
                        {/*        /!*    <BorderColorRoundedIcon style={{ color: "#9E9E9E", height: '0.7rem' }}></BorderColorRoundedIcon><span style={{ fontSize: "0.7rem" }}>Change your profile</span>*!/*/}
                        {/*        /!*</Link>*!/*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <Button
                            className={classes.button}
                            component={NavLink}
                            activeStyle={{ color: "#F29559" }}
                            to="/customer"
                            exact
                        >
                            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon><span> My Account</span>
                        </Button>
                        {/*<Button*/}
                        {/*    className={classes.button}*/}
                        {/*    component={NavLink}*/}
                        {/*    activeStyle={{ color: "#F29559" }}*/}
                        {/*    to="/customer/address"*/}
                        {/*    exact*/}
                        {/*>*/}
                        {/*    <EventAvailableOutlinedIcon></EventAvailableOutlinedIcon><span> My Address</span>*/}
                        {/*</Button>*/}
                        <Button
                            className={classes.button}
                            component={NavLink}
                            activeStyle={{ color: "#F29559" }}
                            to="/customer/orders"
                            exact
                        >
                            <InsertDriveFileOutlinedIcon></InsertDriveFileOutlinedIcon><span> My Order</span>
                        </Button>
                        {/*<Button className="logout" onClick={handleLogout}>Log out</Button>*/}
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Suspense fallback="Loading ...">
                        <Switch>
                            <Route exact path="/customer">
                                <Account />
                            </Route>
                            <Route path="/customer/address">
                                <Address />
                            </Route>
                            <Route path="/customer/orders">
                                <Order />
                            </Route>
                            <Route path="/customer/order/:id">
                                <OrderID />
                            </Route>
                        </Switch>
                    </Suspense>
                </Grid>
            </div>
        </React.Fragment>
    );
}
};
export default User;