import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";

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
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.styleBar}>
        <Toolbar>
          <div>
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
              The Shop
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
              Cart
            </Button>
            <Button
              className={classes.button}
              component={NavLink}
              activeStyle={{ borderBottom: "5px solid #f29559" }}
              to="/Login"
            >
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default NavBar;
