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
const ProductSlug = React.lazy(() => import("./pages/ProductSlug"));
const UserPage = React.lazy(() => import("./components/User/User-Component"));
const CheckoutPage = React.lazy(() => import("./pages/Checkout"));
const PaymentPage = React.lazy(() => import("./pages/Payment"));

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
            <Route exact path="/product">
              <ShopsPage />
              <Footer />
            </Route>
            <Route exact path="/product/:slug">
              <ProductSlug />
              <Footer />
            </Route>
            <Route exact path="/promotion">
              <PromotionPage />
              <Footer />
            </Route>
            <Route exact path="/customer">
              <UserPage />
              <Footer />
            </Route>
            <Route exact path="/cart">
              <CartPage />
              <Footer />
            </Route>
            <Route exact path="/Checkout">
              <CheckoutPage />
            </Route>
            <Route exact path="/Payment">
              <PaymentPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/admin">
              <AdminPage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Fragment>
  );
};

export default App;
