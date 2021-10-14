import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route";
import Home from "./components/home";
import Secret from "./components/Secret";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <ProtectedRoute path="/secret" component={Secret} />
        <Route exact path="/secret" component={Secret} />
      </Switch>
    </div>
  );
}

export default App;
