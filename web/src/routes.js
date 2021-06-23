import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginCard from "./components/LoginCard/index";
import RegisterCard from "./components/RegisterCard/index";
import HomePage from "./components/HomePage/index";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Router path="/register" exact={true}>
          <RegisterCard />
        </Router>
        <Route path="/home" exact={true}>
          <HomePage />
        </Route>
        <Route path="/" exact={true}>
          <LoginCard />
        </Route>
        <Route path="*" exact={true}>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
