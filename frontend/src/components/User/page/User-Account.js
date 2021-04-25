import React from "react";
import proflie from "./../image/proflie.png";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const Account = () => {
    //copy here
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

    return (
        <Grid item xs={9}>
                <Paper className={classes.paper}>
                    <span style={{ fontWeight: '700', color: '#202C39' }}>My Account</span>
                    <hr style={{ height: '0.005rem', backgroundColor: '#E5E5E5', borderWidth: '0', margin: '1rem' }}></hr>
                    <div style={{ padding: '2.5rem' }}>
                        <div style={{ display: "flex", flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                                <img src={proflie} style={{ width: '5.5rem' }} />
                                <div style={{ marginLeft: '1rem' }}>
                                    <Button variant="contained" component="label">
                                        Change image
                                <input
                                            type="file"
                                            hidden
                                        />
                                    </Button><br></br>
                                    <span style={{ textAlign: 'left' }}>Less than 1 MB<br></br>File type : .JPEG, .PNG</span>
                                </div>
                            </div>
                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="search"
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            )
                                        }}
                                        value={name} onChange={handleChange} label="Full Name"
                                    />
                                </FormControl>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="search"
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            )
                                        }}
                                        value={email} onChange={mailChange} label="Email"
                                    />
                                </FormControl>
                            </div>
                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="date"
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            )
                                        }}
                                        value={date} onChange={dateChange} label="Birthday"
                                    />
                                </FormControl>
                                <FormControl variant="outlined" style={{ width: '40%' }}>
                                    <TextField
                                        type="search"
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                </InputAdornment>
                                            )
                                        }}
                                        value={phone} onChange={phoneChange} label="Phone Number"
                                    />
                                </FormControl>
                            </div>
                            <Button style={{marginTop:'2rem',width:'fit-content',padding:'0.5rem',backgroundColor:'#202C39',color:'white'}}>Save Change</Button>
                        </div>
                    </div>
                </Paper>
            </Grid>
    );
};
export default Account;