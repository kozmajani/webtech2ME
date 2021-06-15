import "./App.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Converter_ } from "./pages/Services";
import Author from "./pages/Author";
import Support from "./pages/Support";
import Login from "./components/Authorization/Login/Login";
import Register from "./components/Authorization/Register/Register";
import ProductManager from "./components/ProductManager/ProductManager";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Sidebar loggedIn={loggedIn} logout={logout} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services/product-manager">
          <ProductManager loggedIn={loggedIn} />
        </Route>
        <Route path="/services/converter" exact component={Converter_} />
        <Route path="/author" exact component={Author} />
        <Route path="/support" exact component={Support} />
        <Route path="/login">
          <Login login={login} />
        </Route>
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
