import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Devices from './components/Devices';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import Users from './components/Users';

const RoutedContent = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/devices" component={Devices}/>
      <Route exact path="/settings" component={Settings}/>
    </Switch>
  )
};

export default RoutedContent;