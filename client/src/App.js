import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage"
import Nav from "./components/Nav"

const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  </Router>
);

export default App;
