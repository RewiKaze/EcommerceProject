import React from "react";
import {Grid, Button, Paper, TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
import ProductCreateDemo from "./Demo/ProductCreateDemo";

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

const AdminCreateProduct = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>CREATE PRODUCT</h1>
            <hr/>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <TextField
                        label="Product Name"
                        variant="outlined"
                        style={{ width: "100%"}}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                        label="Slug"
                        variant="outlined"
                        style={{ width: "100%"}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Paper>Upload file demo</Paper>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Price (THB)"
                                        variant="outlined"
                                        style={{ width: "100%"}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            // value={age}
                                            // onChange={handleChange}
                                            label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem >Ten</MenuItem>
                                            <MenuItem >Twenty</MenuItem>
                                            <MenuItem >Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Quantity"
                                        variant="outlined"
                                        style={{ width: "100%"}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="ImageUrl"
                                        variant="outlined"
                                        style={{ width: "100%"}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Description"
                                        variant="outlined"
                                        multiline
                                        style={{ width: "100%"}}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Tags"
                                        variant="outlined"
                                        style={{ width: "100%"}}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr/>
            <Button variant="contained" color="primary">
                Add Product
            </Button>{' '}
            <Button variant="outlined" color="secondary">
                Cancel
            </Button>
            <h1 style={{color:'#202C39'}}>CREATE PRODUCT DEMO</h1>
            <hr/>
            <ProductCreateDemo/>
        </React.Fragment>
    );
};

export default AdminCreateProduct;
