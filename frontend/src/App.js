import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Fragment, Suspense } from 'react'
import Navbar from "../src/components/NavBar"


const HomePage = React.lazy(() => import('./pages/Home'))
const ShopsPage = React.lazy(() => import('./pages/Shops'))
const PromotionPage = React.lazy(() => import('./pages/Promotion'))
const CartPage = React.lazy(() => import('./pages/Cart'))
const LoginPage = React.lazy(() => import('./pages/Login'))
const AdminPage = React.lazy(()=>import('./pages/Admin'))


const App = () => {
  return (
  <Fragment>
    <Suspense fallback="Loading ...">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopsPage />
        </Route>
        <Route path="/promotion">
          <PromotionPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
      </Switch>

    </Router>
    </Suspense>
  </Fragment>
  );
}

export default App;
