import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Page404 from 'components/404';
import Pizza from 'components/pizza';
import Order from 'components/order';
import Success from 'components/success';

const AppRoutes: React.FC = () => (
  <Switch>
    <Route exact path='/'>
      <Pizza />
    </Route>
    <Route path='/order'>
      <Order />
    </Route>
    <Route path='/success/:id'>
      <Success />
    </Route>
    <Page404 />
  </Switch>
);

export default AppRoutes;
