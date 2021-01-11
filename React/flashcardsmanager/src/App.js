import "./App.css";
import SideMenuComponent from "./components/SideMenuComponent";
import AppComponent from "./components/AppComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetUsername from "./components/GetUsername";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <GetUsername />
        </Route>
        <Route path="/home">
          <main className="AppWrapper">
            <SideMenuComponent />
            <AppComponent />
          </main>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
