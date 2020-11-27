import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from '../view';


function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default Routes;