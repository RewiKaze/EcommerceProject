import React from "react";
import {Grid, Button, TextField} from "@material-ui/core";

import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {PROMOTION_QUERY} from "../../graphql/promotionQuery";


const AdminUpdatePromotion = () => {
    const { _id } = useParams();
    const { loading, data, error } = useQuery(PROMOTION_QUERY, { variables: { _id } , fetchPolicy: 'network-only'})
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    return (
        data?.promotions?.map((promo) => (
        <React.Fragment>
            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>EDIT PROMOTION (ID: {promo._id})</h1>
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
                                placeholder={promo.name}
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
                                placeholder={promo.amount}
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
                                placeholder={promo.discount}
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
                                placeholder={promo.productId}
                                type="text"
                                // value={productId}
                                // onChange={handleProductIdChange}
                                required
                            />
                        </Grid>
                    </Grid>
                    <h2>Product Detail</h2>
                    <b>Product ID: </b>{promo.product._id} <br/>
                    <b>Product Name: </b>{promo.product.name} <br/>
                    <b>Product Type: </b>{promo.product.type} <br/>
                    <b>Product Price: </b>{promo.product.price} <br/>
                    <b>Product Image: </b>{promo.product.imageUrl} <br/>
                    <b>Product Description: </b>{promo.product.description} <br/>
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
        ))
    );
};

export default AdminUpdatePromotion;
