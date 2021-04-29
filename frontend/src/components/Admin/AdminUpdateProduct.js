import React from "react";
import {Grid, Button, TextField, InputLabel,Select, FormControl,MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link,useParams} from "react-router-dom";
import {useHistory} from "react-router";
import {useQuery} from "@apollo/client";
import {PRODUCT_QUERY} from "../../graphql/productQuery";

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

const AdminUpdateProduct = (props) => {
    const history = useHistory()
    const classes = useStyles();
    const { _id } = useParams();
    const { loading, data, error } = useQuery(PRODUCT_QUERY, { variables: { _id } , fetchPolicy: 'network-only'})
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }

    return (
        data?.products?.map((product) => (
        <React.Fragment>
            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>EDIT PRODUCT (ID:{product._id} )</h1>
            <hr/>

            <form
                // onSubmit={handleCreateProduct}
            >
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <TextField
                            label="Product Name"
                            variant="outlined"
                            style={{ width: "100%"}}
                            type="text"
                            placeholder={product.name}
                            // value={name}
                            // onChange={handleNameChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                // value={type}
                                // onChange={handleTypeChange}
                                label="Type"
                                required
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={'BEDROOM'}>Bedroom</MenuItem>
                                <MenuItem value={'BATHROOM'}>Bathroom</MenuItem>
                                <MenuItem value={'KITCHEN'}>Kitchen</MenuItem>
                                <MenuItem value={'LIVINGROOM'}>Living Room</MenuItem>
                                <MenuItem value={'OTHER'}>Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            label="Description"
                            variant="outlined"
                            style={{ width: "100%"}}
                            type="text"
                            placeholder={product.description}
                            // value={description}
                            // onChange={handleDescriptionChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            label="Price (THB)"
                            variant="outlined"
                            style={{ width: "100%"}}
                            type="text"
                            placeholder={product.price}
                            // value={price}
                            // onChange={handlePriceChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Quantity"
                            variant="outlined"
                            style={{ width: "100%"}}
                            type="text"
                            placeholder={product.quantity}
                            // value={quantity}
                            // onChange={handleQuantityChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            label="imageUrl"
                            variant="outlined"
                            style={{ width: "100%"}}
                            type="text"
                            placeholder={product.imageUrl}
                            // value={imageUrl}
                            // onChange={handleImageUrlChange}
                            required
                        />
                    </Grid>
                    {/*<Grid item xs={5}>*/}
                    {/*    <TextField*/}
                    {/*        label="Tag"*/}
                    {/*        variant="outlined"*/}
                    {/*        style={{ width: "100%"}}*/}
                    {/*    />*/}
                    {/*</Grid>*/}
                </Grid>
                <br/>
                <hr/>
                <Button variant="contained" color="primary" type="submit" value="Submit">
                    Create
                </Button>
                {'  '}
                <Link to={{
                    pathname: `/admin/product`,
                }} style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="secondary">
                        Back
                    </Button>
                </Link>
            </form>
        </React.Fragment>
        ))
    );
};

export default AdminUpdateProduct;
