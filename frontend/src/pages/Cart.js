import { Typography, Button, Link } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSession } from "../contexts/SessionContext";

import { PRODUCT_QUERY } from "../graphql/productQuery";
import { useQuery } from "@apollo/client";

import "../css/Cart.css";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "#f29559",
    border: "1px solid #f29559",
  },
  IconC: {
    marginTop: 1,
  },
}));

const Cart = () => {
  const { cart } = useSession();
  const { loading, error, data } = useQuery(PRODUCT_QUERY);
  const classes = useStyles();
  if (loading) {
    return "Loading ...";
  }
  if (error) {
    return "Error !!";
  }
  const rows = cart.map((each) => {
    const eachData = data?.products.find((o) => o._id === each.id);
    return {
      id: eachData.name,
      price: eachData.price,
      quantity: each.amount,
      total: each.amount * eachData.price,
    };
  });
  const columns = [
    { field: "id", headerName: "All", width: 900 },
    { field: "price", headerName: "Unit Price", width: 200 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 220,
    },
    {
      field: "total",
      headerName: "Total Price",
      width: 220,
    },
    // {
    //   field: "DeleteI",
    //   headerName: "Delete",
    //   width: 200,
    // },
  ];

  return (
    <div className="CartPage">
      <div className="HeaderCart">
        <Typography variant="h3" style={{ color: "#F29559" }}>
          Shopping Cart
          <ShoppingCartIcon className="IconC" />
        </Typography>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
      <div className="footerAll">
        {/* <div className="footerT">
          <div className="FeeText">
            <LocalShippingIcon className="IconShipping" />
            Fee shipping on orders{" "}
          </div>
          <div className="feeBox">
            Standard delivery{" "}
            <span className="Receive">Receive by 13 April - 15 April</span>
          </div>
          <div className="FeePrice">$0.5-$1.5 </div>
        </div> */}
        {/* <div className="footerR"> */}
        <div className="FeeText2">
          Merchandise Subtotal (
          <span>{cart.reduce((total, obj) => obj.amount + total, 0)}</span>{" "}
          items) :{" "}
        </div>
        <div className="Totalp">
          {rows.reduce((total, obj) => obj.total + total, 0) + " Baht"}
        </div>
        <div className="C-button">
          <Button
            component={NavLink}
            to="/checkout"
            variant="outlined"
            className={classes.button}
          >
            Check out
          </Button>
          {/* <Link to="/checkout">
            <Button variant="outlined" className={classes.button}>
              CHECK OUT
            </Button>
          </Link> */}
        </div>
        {/* </div> */}
      </div>
      <div className="footerSection"></div>
      {/* <div className="footerR">
    <div className="FeeText2">Merchandise Subtotal (<span>3</span>items) : </div>
    <div className="Totalp">$268.00</div>
    <div className="C-button">
      <Button variant="outlined" className={classes.button}>CHECK OUT</Button></div>
</div> */}
    </div>
  );
};

export default Cart;
