import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path='/'>
      <div>Main</div>
    </Route>
    <Route path='/cart'>
      <div>Cart</div>
    </Route>
    <Route path='/:id'>
      <div>Orders</div>
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default AppRoutes;
