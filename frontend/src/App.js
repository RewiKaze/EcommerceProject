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
const User = React.lazy(() => import("./components/User/User-Component"));

const App = () => {
  return (
    // <<<<<<< admin
    <Fragment>
      <Suspense fallback="Loading ...">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
              <Footer />
            </Route>
            <Route path="/shop">
              <ShopsPage />
              <Footer />
            </Route>
            <Route path="/promotion">
              <PromotionPage />
              <Footer />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="/customer">
              <User />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
};

export default App;
