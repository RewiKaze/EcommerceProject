import React from "react";
import "./../css/ProductSlug.css";
import { Grid, Paper } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Carousel from "react-material-ui-carousel";
import product1 from "./../image/product/product1.png";
import { useHistory } from "react-router-dom";
import { PRODUCT_QUERY } from "../graphql/productQuery";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
function Item(props) {
  return (
    <Paper>
      <img style={{ width: "5rem" }} src={props.item.image} />
    </Paper>
  );
}

const ProductSlug = () => {
  const [piece, setPiece] = React.useState(0);
  const { slug } = useParams();
  const { loading, data, error } = useQuery(PRODUCT_QUERY, {
    variables: { slug },
    fetchPolicy: "network-only",
  });
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }

  const pieceChange = (event) => {
    setPiece(event.target.value);
  };
  var items = [
    {
      image: product1,
    },
  ];
  const filteredData = data.products.find((each) => each.slug === slug);
  {
    /* {console.log(
        slug,
        data.products.find((each) => each.slug === slug)
      )}
      <div>{JSON.stringify(filteredData)}</div> */
    {
      /* {console.log(slug)} */
    }
  }

  return (
    <React.Fragment>
      <div className="Product-sell">
        <ArrowBackIosIcon></ArrowBackIosIcon>
        <Grid item xs={6}>
          <p className="head-name">{filteredData.name}</p>
          <hr></hr>
          <div style={{ display: "flex" }}>
            {/* <span>1K&nbsp;</span>
                        <span style={{ color: '#9E9E9E' }}>&nbsp;Sold |&nbsp;</span> */}
            <div className="tag-product">{filteredData.type}</div>
          </div>
          <p className="price-product">
            {parseInt(filteredData.price).toLocaleString("th-TH", {
              style: "currency",
              currency: "THB",
            }) ?? ""}
          </p>
          <div style={{ display: "flex" }}>
            <span style={{ marginRight: "2rem" }}>Shipping</span>
            <div style={{ width: "50%" }}>
              <div style={{ display: "flex", alignContent: "center" }}>
                <LocalShippingIcon
                  style={{ color: "#F29559" }}
                ></LocalShippingIcon>
                <span style={{ color: "#9E9E9E" }}>
                  &nbsp;Standard delivery
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignContent: "center" }}>
                  <LocalAtmIcon style={{ color: "#F29559" }}></LocalAtmIcon>
                  <span style={{ color: "#9E9E9E" }}>&nbsp;Shipping Fee</span>
                </div>
                {/* <span style={{ color: '#9E9E9E' }}>500 THB</span> */}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3rem", display: "flex" }}>
            <Button
              className="Button1"
              style={{ width: "30%", marginRight: "1rem" }}
            >
              <ShoppingCartIcon></ShoppingCartIcon>
              &nbsp;ADD to CART
            </Button>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            marginLeft: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src={filteredData.imageUrl} className="img-product" />
        </Grid>
      </div>

      {/* product detail */}
      <div className="Product-Detail">
        <span style={{ color: "#F29559", marginBottom: "1rem" }}>
          Product Specifications
        </span>
        <div className="Product-Speci">
          <div className="Detail-box">
            <Grid item xs={3} style={{ color: "#F29559" }}>
              <span>Catagory</span>
              <br></br>
              <span>Brand</span>
              <br></br>
              <span>Stock</span>
              <br></br>
            </Grid>
            <Grid item xs={8} style={{ color: "#202C39" }}>
              <span>{filteredData.type}</span>
              <br></br>
              <span>{filteredData.name}</span>
              <br></br>
              <span>{filteredData.quantity}</span>
              <br></br>
            </Grid>
          </div>
        </div>
        <span style={{ color: "#F29559", marginBottom: "1rem" }}>
          Product Description
        </span>
        <div className="Product-Speci">
          <div className="Detail-box">
            <span style={{ color: "#202C39" }}>{filteredData.description}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductSlug;
