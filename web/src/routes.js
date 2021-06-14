import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginCard from "./components/LoginCard/index";
const Routes = () => {
  return (
    <Router>
      <Route path="/" exact>
        <LoginCard />
      </Route>
      <Route path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Router>
  );
};

export default Routes;
