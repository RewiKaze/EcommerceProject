import React from "react";
import {useQuery} from "@apollo/client";
import {PROMOTION_QUERY} from "../../../graphql/promotionQuery";

const PromotionDemo = () => {
    const { loading, error, data } = useQuery(PROMOTION_QUERY)
    if (loading) {
        return 'Loading ...'
    }
    if (error) {
        return 'Error !!'
    }
    const productItem1 = () => {
        return(data?.promotions?.map((promo) => (
            <pre>
                {promo.name} | {promo.code} | {promo.amount} | {promo.endDate}
            </pre>
        )))
    }
    const productItem2 = () => {
        return(data?.promotions?.map((promo) => (
            <pre>
            {JSON.stringify({promo}, null, 4)}
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

export default PromotionDemo;
