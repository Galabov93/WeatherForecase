import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import LoginForm from "./components/LoginForm";
import AuthenticatedRoutes from "./routes/UserRoutes";

function App() {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path="/login" component={() => <LoginForm type="login" />} />
        <Route
          path="/register"
          component={() => <LoginForm type="register" />}
        />
        <AuthenticatedRoutes />
      </Switch>
    </Router>
  );
}

App.propTypes = {};

export default App;
