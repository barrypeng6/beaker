import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { SideBar, Wrapper, AppBar, MainContent } from '../../components';

const OrderListView = ({match}) => (
  <div>
    <SideBar>orders filter</SideBar>
    <Wrapper>
      <AppBar>
        Orders
        <Link to={`${window.location.pathname}/new`}>
          <button>create</button>
        </Link>
      </AppBar>
      <MainContent>
        <ul>
          <li><Link to={`${match.url}/1`}>__1__</Link></li>
          <li><Link to={`${match.url}/2`}>__2__</Link></li>
        </ul>
      </MainContent>
    </Wrapper>
  </div>
);

const OrderCreateView = () => (
  <div>
    New
    <Link to={`/orders`}>
      <button>back</button>
    </Link>
  </div>
);

const OrderDetailView = ({match}) => (
    <div>
      <SideBar>order filter</SideBar>
      <Wrapper>
        <AppBar>
          {`order - ${match.params.id}`}
          <Link to={`/orders`}>
            <button>back</button>
          </Link>
        </AppBar>
        <MainContent>{`order detial - ${match.params.id}`}</MainContent>
      </Wrapper>
    </div>
  );

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