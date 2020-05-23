import React, { Fragment } from 'react';
import {
  Route, BrowserRouter as Router, withRouter, Switch,
} from 'react-router-dom';
import Home from '../pages/Home';

const app = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Fragment>
);

const AppWithRouter = withRouter(app);

const Routes = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default Routes;
