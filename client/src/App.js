import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  Services,
  Converter_,
  ServiceTwo,
  ServiceThree,
} from "./pages/Services";
import Author from "./pages/Author";
import Support from "./pages/Support";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/services/converter" exact component={Converter_} />
        <Route path="/services/service2" exact component={ServiceTwo} />
        <Route path="/services/service3" exact component={ServiceThree} />
        <Route path="/author" exact component={Author} />
        <Route path="/support" exact component={Support} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/be-a-member" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
