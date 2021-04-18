import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Fragment, Suspense } from 'react'
import Navbar from "../src/components/NavBar"
const HomePage = React.lazy(() => import('./pages/Home'))
const ShopsPage = React.lazy(() => import('./pages/Shops'))
const PromotionPage = React.lazy(() => import('./pages/Promotion'))
const CartPage = React.lazy(() => import('./pages/Cart'))
const LoginPage = React.lazy(() => import('./pages/Login'))


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
        <Route path="/Shop">
          <ShopsPage />
        </Route>
        <Route path="/Promotion">
          <PromotionPage />
        </Route>
        <Route path="/Cart">
          <CartPage />
        </Route>
        <Route path="/Login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
    </Suspense>
  </Fragment>
  );
}

export default App;
