import "./App.css";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Register/Register";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import { useState } from "react";
import Success from "./Components/Checkout/Success";
import Account from "./Components/Account/Account";

import Nav2 from "./Components/Home/Nav2/Nav2";
import Footer from "./Components/Footer/Footer";

function App() {
  const [logged, setLogged] = useState(localStorage.getItem("logged"));
  return (
    <Router>
      <Nav2 />
      <Nav logged={logged} setLogged={setLogged} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login setLogged={setLogged} />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
