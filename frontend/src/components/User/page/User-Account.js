import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import proflie from "./../image/proflie.png";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useSession } from "../../../contexts/SessionContext";
import Avatar from "@material-ui/core/Avatar";

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


const Account = () => {
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [date, setDate] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const handleChange = (event) => {
        setName(event.target.value);
    };
    const mailChange = (event) => {
        setEmail(event.target.value);
    };
    const dateChange = (event) => {
        setDate(event.target.value);
    };
    const phoneChange = (event) => {
        setPhone(event.target.value);
    };
    const { user } = useSession();
    if (user) {
        return (
            <Grid item xs={9}>
                <Paper className={classes.paper}>
                    <span style={{ fontWeight: '700', color: '#202C39', marginTop: '0' }}>My Account</span>
                    <hr />
                    <div style={{ padding: '2rem' }}>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                            <Avatar style={{ backgroundColor: "#F2D492", width: '4.5rem', height: '4.5rem' }}>{user?.name[0]}</Avatar>{'  '}
                            <p style={{marginLeft:'2rem',color:'black',fontWeight:'500'}}>Hello, Khun.{user.name}</p>
                            </div>
                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        margin="normal"
                                        value={user.name} label="Full Name"
                                    />
                                </FormControl>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        margin="normal"
                                        value={user.name} label="Username"
                                    />
                                </FormControl>
                            </div>
                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        margin="normal"
                                        value={user.email} label="Email"
                                    />
                                </FormControl>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        margin="normal"
                                        value={user.tel} label="Tel"
                                    />
                                </FormControl>
                            </div>
                            <div style={{ marginTop: '2rem', display: 'flex'}}>
                                <FormControl variant="outlined" style={{ width: '100%' }}>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        margin="normal"

                                        value={user.address} label="Address"
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </Paper>
            </Grid>
        );
    }
};
export default Account;