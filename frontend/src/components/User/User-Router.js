import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Fragment, Suspense } from 'react'
import UserNavbar from "../User/User-Navber"
const UserAccount = React.lazy(() => import('./../../pages/User-account'))
const UserAddress = React.lazy(() => import('./../../pages/User-address'))
const UserOrder = React.lazy(() => import('./../../pages/User-order'))
// const UserOrderID = React.lazy(() => import(''))


const App = () => {
  return (
  <Fragment>
    <Suspense fallback="Loading ...">
    <Router>
      <UserNavbar />
      <Switch>
        <Route exact path="/">
          <UserAccount />
        </Route>
        <Route path="/address">
          <UserAddress />
        </Route>
        <Route path="/orders">
          <UserOrder />
        </Route>
        {/* <Route path="/customer/orders">
          <UserOrderID />
        </Route> */}
      </Switch>
    </Router>
    </Suspense>
  </Fragment>
  );
}

export default App;
