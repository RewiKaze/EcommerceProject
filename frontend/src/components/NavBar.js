import React, { Fragment, useMemo } from "react";
import { NavLink, useLocation, matchPath } from "react-router-dom";
import { AppBar, Toolbar, Button, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import logo from "../image/logo.png";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSession } from "../contexts/SessionContext";
import Badge from "@material-ui/core/Badge";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  styleBar: {
    backgroundColor: "#202c39",
  },
  Menus: {
    display: "flex",
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { loading, user, logout: handleLogout, } = useSession();
  const userBox = useMemo(() => {
    if (loading) {
      return (
        <span>Loading ...</span>
      )
    }
    if (user) {
      return (
        <React.Fragment>
          {user?.type === "ADMIN" ? (
            <Button
              style={{ color: "#F29559" }}
              component={NavLink}
              type="button"
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/admin"
            >
              Admin
            </Button>
          ) : <Button style={{ color: "#F29559" }}
            component={NavLink}
            activeStyle={{ borderBottom: "5px solid #f29559" }}
            to="/cart"
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
            {/*Cart*/}
          </Button>
          }
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar style={{ backgroundColor: "#F2D492" }}>{user?.name[0]}</Avatar>{'  '}
            <span style={{ color: "#F29559", marginLeft: 10 }}>Hello,K.{user?.name}<ArrowDropDownIcon /></span>
          </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>

          <Button style={{ color: "#F29559" }}
            onClick={handleLogout}
            type="button"
          >
            <ExitToAppIcon /> Logout
          </Button>
        </React.Fragment>
      );
    }
    return (<Button
      component={NavLink}
      style={{ color: "#F29559" }}
      activeStyle={{ borderBottom: "5px solid #f29559" }}
      to="/login"
    >
      <PersonIcon /> Login
    </Button>)
  }, [handleLogout, loading, user]);

  const classes = useStyles();
  const location = useLocation();

  // if (
  //   matchPath(location.pathname, {
  //     path: "/admin",
  //   }) == null
  // ) {
  return (
    <>
      <AppBar position="fixed" className={classes.styleBar}>
        <Toolbar>
          <div>
            <Button
              className={classes.button}
              component={NavLink}
              to="/"
              exact
            >
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
              to="/product"
            >
              Product
              </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/promotion"
            >
              Promotion
              </Button>
          </div>

          <div className={classes.navLinkRight}>

            {userBox}

          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
  // }
  // else {
  //   return null;
  // }
};

export default NavBar;
