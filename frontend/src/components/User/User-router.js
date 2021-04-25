import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment, Suspense } from "react";
import UserNav from "./User-Component";

const Account = React.lazy(() => import("./page/User-Account"));
const Address = React.lazy(() => import("./page/User-Address"));
const Order = React.lazy(() => import("./page/User-Order"));

const UserRouter = () => {
  return (
    <Fragment>
      <Suspense fallback="Loading ...">
        <Router>
          <UserNav />
          <Switch>
            <Route exact path="/">
              <Account />
            </Route>
            <Route path="/address">
              <Address />
            </Route>
            <Route path="/orders">
              <Order />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
};

export default UserRouter;
