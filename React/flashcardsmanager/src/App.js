import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetUsername from "./components/GetUsername";
import Wrapper from "./Wrapper";
import AppContextProvider from "./context/AppContext";
function App() {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={GetUsername} />
          <Route path="/home" component={Wrapper} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
