import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Homepage from "./pages/Homepage";
import Userpage from "./pages/Userpage";


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/userpage" component={Userpage}/>
      </Switch>
    </div>
  </Router>
);

export default App;
