import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, Signin } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signin" component={Signin} />
  </Switch>
);

export default Routes;
