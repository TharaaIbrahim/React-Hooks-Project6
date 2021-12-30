import "./App.css";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Register/Register";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
