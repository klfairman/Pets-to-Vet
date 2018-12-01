import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage"


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  </Router>
);

export default App;
