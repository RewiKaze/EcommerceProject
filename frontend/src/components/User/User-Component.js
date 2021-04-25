import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./User-Component.css";
import proflie from "./image/proflie.png";
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import Button from '@material-ui/core/Button';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

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

const UserNav = () => {

    //copy this
    const [sort, setSort] = React.useState('');
    const handleChange = (event) => {
        setSort(event.target.value);
    };

    const classes = useStyles();
    return (
        <div className={classes.root} style={{ display: 'flex' }}>
            <Grid item xs={3}>
                <Paper className={classes.paper} style={{ display: 'flex', flexDirection: 'column', backgroundColor: "#E5E5E5", boxShadow: '0 0' }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <img src={proflie} style={{ width: "4.5rem" }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "1rem", textAlign: "left" }}>
                            <span className="head-title">POTE</span>
                            <Link href="#">
                                <BorderColorRoundedIcon style={{ color: "#9E9E9E", height: '0.7rem' }}></BorderColorRoundedIcon><span style={{ fontSize: "0.7rem" }}>Change your profile</span>
                            </Link>
                        </div>
                    </div>
                    <Button
                        className={classes.button}
                        to="/"
                        exact
                    >
                        <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon><span> My Account</span>
                    </Button>
                    <Button
                        className={classes.button}
                        to="/"
                        exact
                    >
                        <EventAvailableOutlinedIcon></EventAvailableOutlinedIcon><span> My Address</span>
                    </Button>
                    <Button
                        className={classes.button}
                        to="/"
                        exact
                    >
                        <InsertDriveFileOutlinedIcon></InsertDriveFileOutlinedIcon><span> My Order</span>
                    </Button>
                    <Button className="logout">Log out</Button>
                </Paper>
            </Grid>
        </div>
    );
};
export default UserNav;