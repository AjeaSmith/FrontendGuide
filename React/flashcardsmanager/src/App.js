import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetUsername from "./components/GetUsername";
import Wrapper from "./Wrapper";
import AppContextProvider from "./context/AppContext";
function App() {
  return (
    <Router>
      <Switch>
        <AppContextProvider>
          <Route exact path="/" component={GetUsername} />
          <Route path="/home" component={Wrapper} />
        </AppContextProvider>
      </Switch>
    </Router>
  );
}

export default App;
