import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from './Home';

const Routes = (
  <Router>
    <div>
      {/* <Route exact path="/" component={ Home } /> */}
      <Route exact path="/" component={ Home } something="test" />
    </div>
  </Router>
);

export default Routes;
