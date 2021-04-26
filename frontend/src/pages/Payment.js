import { Typography, Button } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import { makeStyles } from '@material-ui/core/styles';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

import "../css/Payment.css";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "#f29559",
    border: "1px solid #f29559",
  },
  IconC: {
    marginTop: 1,
    fontSize: "100%",
  },
  IconEd: {
    marginTop: 1,
    color: "#202C39",
  },
  rootZ: {
    '& > *': {
      margin: theme.spacing(1),
      width: "70vw",
    },
  },

}));
const currencies = [
  {
    value: 'BBL',
    label: 'BANGKOK BANK PUBLIC COMPANY LIMITED',
  },
  {
    value: 'KBANK',
    label: 'Kasikornbank Public Company Limited (KBANK)',
  },
  {
    value: 'SCB',
    label: 'Siam Commercial Bank Public Company Limited (SCB)',
  },
  {
    value: 'KTB',
    label: 'Krung Thai Bank Public Company Limited (KTB)',
  },
];
const Payment = () => {
  const [currency, setCurrency] = React.useState('SCB');



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const classes = useStyles();
  return <div className="CartPage">
    <div className="HeaderCart">
      <Typography variant="h3" style={{ color: "#F29559" }}>Payment<PaymentIcon className={classes.IconC} /></Typography>
    </div>
    <div className="footerAllCheck">
      <div className="footerPayment">
        <div className="Total-S">Total Payment </div>
      </div>
      <div className="footerPayment">
        <div className="Total-S">$272.00</div>
      </div>
    </div>
    <div className="HeaderDetail">
      <div className="Iconpay">
        <AccountBalanceIcon className="IconC" /></div>
      <div className="NamePays">
        Payment Method</div>
    </div>
    <div className="footerAllD">
      <div className="AddressD">
        <div className="Pay-Des"><span>Account : FUNITURE STORE INC. CO.,LTD </span><br />
          <span className="Pay-Des2">Siam Commercial Bank Public Company Limited (SCB)</span>
          <span className="Pay-Des3">467 8514 258</span>
        </div>
      </div>
    </div>
    <div className="lineCross"></div>
    <div className="footerAllD">
      <div className="AddressD">
        <div className="Pay-Des"><span>Account : FUNITURE STORE INC. CO.,LTD </span><br />
          <span className="Pay-Des2">Siam Commercial Bank Public Company Limited (SCB)</span>
          <span className="Pay-Des3">467 8514 258</span>
        </div>
      </div>
    </div>
    <div className="HeaderDetail">
      <div className="Iconpay">
        <CheckCircleIcon className="IconC" /></div>
      <div className="NamePays">
        Confirm payment</div>
    </div>
    <div className="footerPayment-F">
      <div className="Payment-F">
        <div className="Pay-form">Payment transfer date:</div>
        <div className="Pay-form2"> <form className={classes.rootZ} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="DD/MM/YYYY" variant="outlined" />
        </form></div>
      </div>
      <br />
      <div className="Payment-F">
        <div className="Pay-form">Payment transfer time:</div>
        <div className="Pay-form2"> <form className={classes.rootZ} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="--:--" variant="outlined" />
        </form></div>
      </div>
      <br />
      <div className="Payment-F">
        <div className="Pay-form">Payment transfer from:</div>
        <div className="Pay-form2"> <form className={classes.rootZ} noValidate autoComplete="off">
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your bank"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </form></div>
      </div>
      <br />
      <div className="Payment-F">
        <div className="Pay-form">Payment transfer to:</div>
        <div className="Pay-form2"> <form className={classes.rootZ} noValidate autoComplete="off">
        <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            helperText="Please select your bank"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </form></div>
      </div>
      <br />
      <div className="Payment-F">
        <div className="Pay-form">Payment transfer number:</div>
        <div className="Pay-form2"> <form className={classes.rootZ} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Last 4 digit account numbers" variant="outlined" />
        </form></div>
      </div>
      <br />
      <div className="Payment-B">
      <div className="Payment-button">
        <Button onClick={handleClickOpen} variant="contained" disableElevation style={{ color: "white", backgroundColor: "#F29559" }}>SUBMIT</Button></div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"THANK YOU"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <VerifiedUserIcon className="IconC" />
            We will confirm your order around 24 Hours or 7 - 14 days.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="#F29559">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  </div>
};

export default Payment;

