import React from "react";
import {Grid, Button, TextField} from "@material-ui/core";



const AdminUpdatePromotion = () => {
    return (
        <React.Fragment>
            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>EDIT PROMOTION (ID: dlmvkdmkvdlkvmdkmv)</h1>
            <hr/>
                <form
                    // onSubmit={handleCreatePromotion}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                label="Promotion Name"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                // value={name}
                                // onChange={handleNameChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="Amount"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                // value={amount}
                                // onChange={handleAmountChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Discount (Percent)"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                // value={discount}
                                // onChange={handleDiscountChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="ProductID"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                // value={productId}
                                // onChange={handleProductIdChange}
                                required
                            />
                        </Grid>
                    </Grid>
                    <h2>Product Detail</h2>
                    <b>Product Name: </b> <br/>
                    <b>Product Type: </b> <br/>
                    <b>Product Price: </b> <br/>
                    <b>Product Image: </b> <br/>
                    <b>Product Description: </b> <br/>
                    <b>Product Tag: </b>
                    <br/>
                    <hr/>
                    <Button variant="contained" color="primary" type="submit" value="Submit">
                        Create
                    </Button>
                    {'  '}
                    <Button variant="outlined" color="secondary">
                        Back
                    </Button>
                </form>
        </React.Fragment>
    );
};

export default AdminUpdatePromotion;
