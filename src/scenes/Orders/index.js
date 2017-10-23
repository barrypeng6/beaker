import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  OrderListView,
  OrderCreateView,
  OrderDetailView,
} from './components';

const routes = [
  {
    path: '/',
    component: OrderListView
  },
  {
    path: '/new',
    component: OrderCreateView
  },
  {
    path: '/:id',
    component: OrderDetailView
  }
]

const Orders = ({match}) => (
  // Orsers route
  <Switch>
    {routes.map( route => (
      <Route key={route.path} exact path={match.url + route.path} component={route.component}/>
    ))}
  </Switch>
);

export default Orders;