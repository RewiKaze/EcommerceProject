import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Fragment, Suspense } from "react";
import Navbar from "../src/components/NavBar";
import Footer from "../src/components/Footer";

const HomePage = React.lazy(() => import("./pages/Home"));
const ShopsPage = React.lazy(() => import("./pages/Shops"));
const PromotionPage = React.lazy(() => import("./pages/Promotion"));
const CartPage = React.lazy(() => import("./pages/Cart"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const RegisterPage = React.lazy(() => import("./pages/Register"));
const AdminPage = React.lazy(() => import("./pages/Admin"));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback="Loading ...">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/Shop">
              <ShopsPage />
              <Footer />
            </Route>
            <Route path="/Promotion">
              <PromotionPage />
              <Footer />
            </Route>
            <Route path="/Cart">
              <CartPage />
              <Footer />
            </Route>
            <Route path="/Login">
              <LoginPage />
            </Route>
            <Route path="/Register">
              <RegisterPage />
            </Route>
            <Route path="/Admin">
              <AdminPage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
};

export default App;
