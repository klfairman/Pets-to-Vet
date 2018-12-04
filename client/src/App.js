import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage"
import Nav from "./components/Nav"
import listitem from "./components/Listitem/listitem"


const App = () => (
  <Router>
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/listitem" component={listitem} />

      </Switch>
    </div>
  </Router>
);

export default App;
