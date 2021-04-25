import React, {useCallback, useState} from "react";
import {Grid, Button, TextField,} from "@material-ui/core";

import {PROMOTION_QUERY} from "../../graphql/promotionQuery";
//Mutation
import { gql, useMutation } from "@apollo/client";
import {useHistory} from "react-router";
import CardItem from "../Admin/Adminpromotion/showProduct"
import {Link} from "react-router-dom";
const CREATE_PROMOTION = gql`
    mutation($record: CreateOnePromotionInput!) {
        createPromotion(record: $record) {
          recordId
        }
      }
`;

const AdminCreatePromotion = () => {
    const history = useHistory();
    const [name, setName]= useState("");
    const [amount, setAmount]= useState("");
    const [discount, setDiscount]= useState("");
    const [productId, setProductId] = useState('');
    const [createPromotion] = useMutation(CREATE_PROMOTION);

    const handleNameChange = useCallback((e) => {
        setName(e.target.value);
    }, []);
    const handleAmountChange = useCallback((e) => {
        setAmount(e.target.value);
    }, []);
    const handleDiscountChange = useCallback((e) => {
        setDiscount(e.target.value);
    }, []);
    const handleProductIdChange = useCallback((e) => {
        setProductId(e.target.value);
    }, []);

    const handleCreatePromotion = useCallback(
        async (e) => {
            e.preventDefault();
            const variables = {
                record: {createPromotion, name, amount, discount, productId
                },
            };
            await createPromotion({
                variables,
                refetchQueries: [{ query: PROMOTION_QUERY }],
            });
            setName("");
            setAmount("");
            setDiscount("");
            setProductId("");
            history.push("/admin/promotions");
        },
        [createPromotion, name, amount, discount, productId
        ]
    );

    return (
        <React.Fragment>
            {/*Dashboard*/}
            <h1 style={{color:'#202C39'}}>CREATE PROMOTION</h1>
            <hr/>
                <form
                    onSubmit={handleCreatePromotion}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                label="Promotion Name"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="Amount"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                value={amount}
                                onChange={handleAmountChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                label="Discount (Percent)"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                value={discount}
                                onChange={handleDiscountChange}
                                required
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                label="ProductID"
                                variant="outlined"
                                style={{ width: "100%"}}
                                type="text"
                                value={productId}
                                onChange={handleProductIdChange}
                                required
                            />
                        </Grid>
                    </Grid>
                    <hr/>
                    <Button variant="contained" color="primary" type="submit" value="Submit">
                        Create
                    </Button>
                    {'  '}
                    <Link to={{
                        pathname: `/admin/promotions`,
                    }} style={{ textDecoration: "none" }}>
                        <Button variant="outlined" color="secondary">
                            Back
                        </Button>
                    </Link>

                </form>
                    <h2>Product List</h2>
                    <hr/>
                    <Grid container spacing={3}>
                        {/*<Grid item xs={12}>*/}
                            <CardItem/>
                        {/*</Grid>*/}
                </Grid>

                    <br/>

            {/*<hr/>*/}

            {/*<h1 style={{color:'#202C39'}}>CREATE PROMOTION DEMO</h1>*/}
            {/*<hr/>*/}
            {/*<PromotionCreateDemo/>*/}
        </React.Fragment>
    );
};

export default AdminCreatePromotion;
