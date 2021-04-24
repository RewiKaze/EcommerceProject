import {Typography, Button, Link} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

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
  const classes = useStyles();
  return <div className="CartPage">
    <div className="HeaderCart">
  <Typography variant="h3"style={{ color: "#F29559" }}>Shopping Cart<ShoppingCartIcon className="IconC"/></Typography>
  </div>
  <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    <div className="footerAll">
    <div className="footerT">
    <div className="FeeText"><LocalShippingIcon className="IconShipping"/>Fee shipping on orders </div>
    <div className="feeBox">Standard delivery <span className="Receive">Receive by 13 April - 15 April</span></div>
    <div className="FeePrice">$0.5-$1.5 </div>
    </div>
    <div className="footerR">
    <div className="FeeText2">Merchandise Subtotal (<span>3</span>items) : </div>
    <div className="Totalp">$268.00</div>
    <div className="C-button">
    <Link to="/Checkout">
      <Button variant="outlined" className={classes.button}>CHECK OUT</Button></Link>
      </div>
</div>
</div>
<div className="footerSection"></div>
{/* <div className="footerR">
    <div className="FeeText2">Merchandise Subtotal (<span>3</span>items) : </div>
    <div className="Totalp">$268.00</div>
    <div className="C-button">
      <Button variant="outlined" className={classes.button}>CHECK OUT</Button></div>
</div> */}
    </div>
};

const columns = [
  { field: 'id', headerName: 'All', width: 600 },
  { field: 'price', headerName: 'Unit Price', width: 220 },
  
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 220,
  },
  {
    field: 'total',
    headerName: 'Total Price',
    width: 220,
  },
  {
    field: 'DeleteI',
    headerName: 'Delete',
    width: 200,
  }
];

const rows = [
  { id: 1, price: '$89', quantity: 2, total: '$178', DeleteI:'DELETE' },
  { id: 2, price: '$89', quantity: 1, total: '$89', DeleteI:'DELETE'  },
  { id: 3, price: '$89', quantity: 2, total: '$178', DeleteI:'DELETE'  },
  { id: 4, price: '$89', quantity: 1, total: '$89', DeleteI:'DELETE'  },
  { id: 5, price: '$89', quantity: 2, total: '$178', DeleteI:'DELETE'  },
  { id: 6, price: '$89', quantity: 1, total: '$89', DeleteI:'DELETE'  },
  { id: 7, price: '$89', quantity: 1, total: '$89', DeleteI:'DELETE'  },
  { id: 8, price: '$89', quantity: 1, total: '$89', DeleteI:'DELETE'  },
  { id: 9, price: '$89', quantity: 1, total: '$89', DeleteI:'DELETE'  },
];

export default Cart;

