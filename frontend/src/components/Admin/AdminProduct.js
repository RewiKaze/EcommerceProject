import React from "react";
import {Grid, Button, Paper, TextField} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

import TableProduct from "./Adminproduct/TableProduct"
import ProductDemo from "./Demo/ProductDemo"
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const AdminProduct = () => {
    const classes = useStyles();
    return (
        <React.Fragment>

            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>PRODUCT <span><Button variant="contained" style={{backgroundColor:"#F2DC92"}}><AddIcon/> Create Product</Button></span></h1>
            <hr/>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        style={{ width: "100%"}}
                    />
                </Grid>
                <Grid item xs={3}>
                    <FormControl variant="outlined" style={{width:"100%"}}>
                        <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
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
                <Grid item xs={3}>
                    <FormControl variant="outlined" style={{width:"100%"}}>
                        <InputLabel htmlFor="outlined-age-native-simple">Price</InputLabel>
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
                <Grid item xs={3}>
                    <FormControl variant="outlined" style={{width:"100%"}}>
                        <InputLabel htmlFor="outlined-age-native-simple">Status</InputLabel>
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
                <Grid item xs={12}>
                    <TableProduct/>
                </Grid>
                <Grid item xs={12}>
                    <ProductDemo/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default AdminProduct;
