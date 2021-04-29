import React from "react";
import DetailProduct from "./DetailProduct"
const ProductSlug = ({match}) => {
    const lang = match.params.language;
    return(
        <div className="Box-detail">
        <h1>{lang}</h1>
        <DetailProduct lang={lang}></DetailProduct>
        </div>
    )
};

export default ProductSlug;
