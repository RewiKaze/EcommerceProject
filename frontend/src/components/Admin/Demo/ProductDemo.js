import React from "react";
import {useQuery} from "@apollo/client";
import {PRODUCT_QUERY} from "../../../graphql/productQuery";

const ProductDemo = () => {
    const { loading, error, data } = useQuery(PRODUCT_QUERY)
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    const productItem1 = () => {
        return(data?.products?.map((product) => (
            <pre>
                {product.name} | {product.price} THB
            </pre>
        )))
    }
    const productItem2 = () => {
        return(data?.products?.map((product) => (
            <pre>
            {JSON.stringify({product}, null, 4)}
            </pre>
        )))
    }

    return(
        <React.Fragment>
            <h1>Product Demo</h1>
            <hr/>
            {productItem1()}
            <h1>Product JSON Demo</h1>
            <hr/>
            {productItem2()}
        </React.Fragment>
    );
};

export default ProductDemo;
