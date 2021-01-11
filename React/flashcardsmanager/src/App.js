import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetUsername from "./components/GetUsername";
import Wrapper from "./Wrapper";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={GetUsername} />
        <Route path="/home" component={Wrapper} />
      </Switch>
    </Router>
  );
}

export default App;
