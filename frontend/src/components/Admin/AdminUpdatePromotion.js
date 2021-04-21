import React from "react";
import {Grid, Button, Paper, TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        minWidth: "100%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const AdminUpdatePromotion = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>EDIT PROMOTION (ID: dlmvkdmkvdlkvmdkmv)</h1>
            <hr/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                label="Promotion Name"
                                variant="outlined"
                                style={{ width: "100%"}}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="Code"
                                variant="outlined"
                                style={{ width: "100%"}}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                label="Description"
                                variant="outlined"
                                style={{ width: "100%"}}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="ImageUrl"
                                variant="outlined"
                                style={{ width: "100%"}}
                            />
                        </Grid>
                    </Grid>
                </Grid>



                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                label="Amount "
                                variant="outlined"
                                style={{ width: "100%"}}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Active</FormLabel>
                                <FormControlLabel
                                    control={<Checkbox name="checkedA" />}
                                    label="Availiable"
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                label="Discount"
                                variant="outlined"
                                style={{ width: "100%"}}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <KeyboardDatePicker
                                style={{top:-20}}
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                // value={selectedDate}
                                // onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <FormControl variant="outlined" style={{width:"100%"}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Product</InputLabel>
                                <Select
                                    native
                                    label="Category"
                                    inputProps={{
                                        name: 'Category',
                                        id: 'outlined-age-native-simple',
                                    }}
                                >
                                    <option aria-label="None" />

                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr/>
                <Button variant="contained" color="primary">
                    Update
                </Button>{' '}
                <Button variant="contained" color="secondary">
                    Delete
                </Button>{' '}
                <Button variant="outlined" color="secondary">
                    Cancel
                </Button>
        </MuiPickersUtilsProvider>
        </React.Fragment>
    );
};

export default AdminUpdatePromotion;
