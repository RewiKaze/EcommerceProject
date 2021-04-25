import { Typography, Button } from '@material-ui/core';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

import "../css/Checkout.css";
const useStyles = makeStyles((theme) => ({
    button: {
        color: "#f29559",
        border: "1px solid #f29559",
    },
    IconC: {
        marginTop: 1,
    },
    IconEd: {
        marginTop: 1,
        color: "#202C39",
    },
    rootZ: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

}));

const Checkout = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return <div className="CartPage">
        <div className="HeaderCart">
            <Typography variant="h3" style={{ color: "#F29559" }}>Checkout<BeenhereIcon className="IconC" /></Typography>
        </div>
        <div className="footerAllCheck">
            <div className="footerCheck">
                <div className="Deli-t">Delivery Address </div>
            </div>
        </div>
        <div className="HeaderDetail">
            <div className="NameAddsBox"><Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            /></div>
            <div className="NameAdds">
            Address <span>1</span></div>
        </div>
        <div className="footerAllD">
            <div className="AddressD">
                <div className="Add-Des"><span>Pattharnan Ruengchana </span><br/>
                    <span>159/123 m.2 Tahkheintie Banglamung 20150 </span><br/>
                    <span>Tel. 0959031xxx</span>
                </div>
                </div>
                <div className="Pro-button">
                    <Button variant="outlined" style={{ color: "white", backgroundColor: "#F29559" }}>Set as Defaut Address</Button></div>
            
            <div className="footerAllR">
                <div className="FeeText3"> Edit <EditIcon className="IconEd" /></div>
                <div className="FeeText3" >Delete <DeleteIcon className="IconEd" /></div>
            </div>
        </div>

        <div className="HeaderDetail">
            <div className="NameAddsBox"><Checkbox
               
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            /></div>
            <div className="NameAdds">
            Address <span>2</span></div>
        </div>
        <div className="footerAllD">
            <div className="AddressD">
                <div className="Add-Des"><span>Pattharnan Ruengchana </span><br/>
                    <span>102/12 m.8 Lamphatew Banglajung 10250 </span> <br/>
                    <span>Tel. 0959031xxx</span>
                </div>
                </div>
                <div className="Pro-button">
                    <Button variant="outlined" className={classes.button}>Set as Defaut Address</Button></div>
            
            <div className="footerAllR">
                <div className="FeeText3"> Edit <EditIcon className="IconEd" /></div>
                <div className="FeeText3" >Delete <DeleteIcon className="IconEd" /></div>
            </div>
        </div>
        <div className="HeaderDetail">
            <div className="Add-Adds"><Button onClick={handleClickOpen}>
            + Add A New Address </Button></div>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add A New Address"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          To place order, please add a delivery address

          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Set as Defaut Address"
          />
        </Grid>
      </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="#F29559">
            CANCLE
          </Button>
          <Button variant="outlined" style={{ color: "white", backgroundColor: "#F29559" }} onClick={handleClose} autoFocus>
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
        </div>

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
        <div className="footerAllCheck">
            <div className="footerT">
                <div className="footerCheck">
                    <div className="FeeText-F">Shipping option : standard delivery </div>
                </div>
            </div>
            <div className="footerG">
                <div className="Totalshipping">$2.00</div>
            </div>
        </div>

        <div className="footerAll">
            <div className="footerT">
                <div className="FeeText">Promotion Code </div>
                <div className="Procode">
                    <form className={classes.rootZ} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Enter Voucher code here" variant="outlined" />
                    </form>
                </div>
                <div className="Pro-button">
                    <Button variant="outlined" className={classes.button}>Apply</Button></div>
            </div>
            <div className="footerR">
                <div className="FeeText2">Order total : (<span>3</span>items) : </div>
                <div className="Totalp">$272.00</div>
                <div className="Payment-button">
                    <Button variant="contained" disableElevation style={{ color: "white", backgroundColor: "#F29559" }}>Payment</Button></div>
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
    { field: 'price', headerName: 'Unit Price', width: 250 },

    {
        field: 'quantity',
        headerName: 'Amount',
        width: 250,
    },
    {
        field: 'total',
        headerName: 'Total Price',
        width: 400,
    },
];

const rows = [
    { id: 1, price: '$89', quantity: 2, total: '$178', },
    { id: 2, price: '$89', quantity: 1, total: '$89', },
    { id: 3, price: '$89', quantity: 2, total: '$178', },
    { id: 4, price: '$89', quantity: 1, total: '$89', },
    { id: 5, price: '$89', quantity: 2, total: '$178', },
    { id: 6, price: '$89', quantity: 1, total: '$89', },
    { id: 7, price: '$89', quantity: 1, total: '$89', },
    { id: 8, price: '$89', quantity: 1, total: '$89', },
    { id: 9, price: '$89', quantity: 1, total: '$89', },
]

export default Checkout;

