import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Page404 from 'components/404';
import Pizza from 'components/pizza';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path='/'>
      <Pizza />
    </Route>
    <Route path='/cart'>
      <div>Cart</div>
    </Route>
    <Route path='/user/:id'>
      <div>Orders</div>
    </Route>
    <Page404 />
  </Switch>
);

export default AppRoutes;
