import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { NavLink, Switch, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
// import {Switch} from "react-router-dom";

const AdminDashboard = React.lazy(() =>
  import("../components/Admin/AdminDashboard")
);
const AdminProduct = React.lazy(() =>
  import("../components/Admin/AdminProduct")
);
const AdminCreateProduct = React.lazy(() =>
  import("../components/Admin/AdminCreateProduct")
);
const AdminUpdateProduct = React.lazy(() =>
  import("../components/Admin/AdminUpdateProduct")
);
const AdminPromotion = React.lazy(() =>
  import("../components/Admin/AdminPromotion")
);
const AdminCreatePromotion = React.lazy(() =>
  import("../components/Admin/AdminCreatePromotion")
);
const AdminUpdatePromotion = React.lazy(() =>
  import("../components/Admin/AdminUpdatePromotion")
);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 5,
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius: 0,
    height: "100vh",
    position: "fixed",
  },
  navbar: {
    backgroundColor: "#202C39",
    padding: theme.spacing(2),
    borderRadius: 0,
    height: "calc(100vh - 0.65em)",
  },
}));

const Admin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="space-between">
        <Grid item xs={2} className={classes.navbar}>
          {/* <Paper
            className={classes.paper}
            style={{ backgroundColor: "#202C39", color: "#F29559" }}
          >
            ADMIN DASHBOARD
          </Paper> */}
          <Button
            // className={classes.button}
            component={NavLink}
            activeStyle={{ backgroundColor: "#F2D492", color: "#202C39" }}
            to="/admin"
            exact
          >
            Dashboard
          </Button>
          <Button
            component={NavLink}
            activeStyle={{ backgroundColor: "#F2D492", color: "#202C39" }}
            to="/admin/product"
          >
            Products
          </Button>
          <Button
            component={NavLink}
            activeStyle={{ backgroundColor: "#F2D492", color: "#202C39" }}
            to="/admin/promotions"
          >
            Promotions
          </Button>
          <Button
            component={NavLink}
            activeStyle={{ backgroundColor: "#F2D492", color: "#202C39" }}
            to="/admin/orders"
          >
            Orders
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Switch>
            <Route exact path="/admin">
              <AdminDashboard style={{ padding: 10 }} />
            </Route>
            <Route exact path="/admin/product">
              <AdminProduct style={{ padding: 10 }} />
            </Route>
            <Route exact path="/admin/product/create">
              <AdminCreateProduct style={{ padding: 10 }} />
            </Route>
            <Route path="/admin/product/:id">
              <AdminUpdateProduct style={{ padding: 10 }} />
            </Route>
            <Route exact path="/admin/promotions">
              <AdminPromotion style={{ padding: 10 }} />
            </Route>
            <Route exact path="/admin/promotions/create">
              <AdminCreatePromotion style={{ padding: 10 }} />
            </Route>
            <Route path="/admin/promotion/:promotionId">
              <AdminUpdatePromotion style={{ padding: 10 }} />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};
export default Admin;
