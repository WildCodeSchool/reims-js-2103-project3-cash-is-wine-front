import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import Register from './Register';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Switch>
      {route('/', Home)}
      {route('/login', Login)}
      {route('/logout', Logout)}
      {route('/profile', Profile)}
      {route('/register', Register)}
    </Switch>
  );
}

export default Routes;
