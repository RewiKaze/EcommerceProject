import { PRODUCT_QUERY } from "../../../graphql/productQuery";
import { useQuery } from '@apollo/client'

const DetailProduct = (props) => {
    const lang = props.lang;
    const { loading, error, data } = useQuery(PRODUCT_QUERY)
    return(
        data?.products?.slice(0, 8).map((product) => (
        <div className="Box-detail">
            <ul>
                <li>Name : {product.name}</li>
                <li>price : {product.price}</li>
                <li>descriptpion : {product.description}</li>
            </ul>
        </div>
        ))
    )
};

export default DetailProduct;
