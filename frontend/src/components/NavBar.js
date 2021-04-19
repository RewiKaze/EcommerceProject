import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import { logDOM } from "@testing-library/dom";
import logo from "../image/logo.png";
import Avatar from '@material-ui/core/Avatar';

import React, { Fragment, useMemo } from 'react'
import { useSession } from '../contexts/SessionContext'
import Login from "../pages/Login";
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  styleBar: {
    backgroundColor: "#202c39",
  },
  button: {
    color: "#f29559",
    borderRadius: "0px",
  },
  navLinkRight: {
    right: theme.spacing(2),
    position: "absolute",
  },
}));

const NavBar = () => {
  const { loading, user, logout: handleLogout } = useSession()
  const userBox = useMemo(() => {
    if (user) {
      return (
          <React.Fragment>
          <span style={{ marginRight: 10, fontSize: 16 }}>
            Hello, K.{user?.name.toUpperCase()}
          </span>
            <Button variant="contained" color="secondary" onClick={handleLogout} type="button">Logout</Button>
          </React.Fragment>
      );
    }
  }, [handleLogout, loading, user]);

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.styleBar}>
        <Toolbar>
          <div>
            <Button className={classes.button} component={NavLink} to="/" exact>
              <img src={logo} width="50vw" />
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/"
              exact
            >
              Home
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/Shop"
            >
              Product
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/Promotion"
            >
              Promotion
            </Button>
          </div>
          <div className={classes.navLinkRight}>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/Cart"
            >
              <Badge badgeContent={4} color="error" >
              <ShoppingCartIcon /></Badge>
              {/*Cart*/}
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/Login"
            >
              <PersonIcon /> Login
            </Button>
            <Button><Avatar>N</Avatar></Button>
            {userBox}
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
