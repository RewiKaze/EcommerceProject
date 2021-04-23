import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import "./User-Navber.css"
import img from './../../image/customer/Profile.png'
import CreateIcon from '@material-ui/icons/Create';
import PersonIcon from '@material-ui/icons/Person';
import { Button } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '90%',
        margin: '1.5rem',
    },
}));

const UserNavbar = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Typography component="div" style={{ backgroundColor: '#E5E5E5', height: '90vh', display: 'flex', justifyContent: 'center', }}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} style={{ color: '#E5E5E5'}}>
                            <div className="profile">
                                <div className="profile-L">
                                    <img src={img} className="profile-img" />
                                </div>
                                <div className="profile-R">
                                    <span className="profile-name">POTE</span><br></br>
                                    <div className="profile-R-down">
                                        <CreateIcon color="disabled" style={{ fontSize: '0.6rem' }} /><span>Change your profile</span>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ color: '#202C39', margin: '1.5rem' }}></hr>
                            <div className="user-menu">
                                <Button className={classes.button} component={NavLink} to="/" activeStyle={{ color: '#F29559' }} >
                                    <PersonIcon style={{ color: '#202C39' }}/>
                                    <span className="user-menu-menu">My Account</span>
                                </Button>
                                <Button className={classes.button} component={NavLink} to="/address" activeStyle={{ color: '#F29559' }} exact>
                                    <PersonIcon style={{ color: '#202C39' }} />
                                    <span className="user-menu-menu">My Address</span>
                                </Button>
                                <Button className={classes.button} component={NavLink} to="/orders" activeStyle={{ color: '#F29559' }} exact>
                                    <PersonIcon style={{ color: '#202C39' }} />
                                    <span className="user-menu-menu">My Order</span>
                                </Button>

                            </div>
                            <Button variant="contained" className="logout-buttom">
                                Logout
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper className={classes.paper}></Paper>
                    </Grid>
                </Typography>
            </Container>
        </React.Fragment>
    );
};
export default UserNavbar;