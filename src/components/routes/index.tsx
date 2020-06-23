import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Page404 from 'components/404';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path='/'>
      <div>Main</div>
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
