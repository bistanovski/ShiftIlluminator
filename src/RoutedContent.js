import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Charts from './components/Charts';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';

import Users from './containers/Users';
import DevicesList from './containers/DevicesList';
import DeviceDetails from './components/DeviceDetails';

const RoutedContent = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/charts" component={Charts}/>
      <Route exact path="/devices" component={DevicesList}/>
      <Route exact path="/settings" component={Settings}/>
      <Route path="/device/:device_id" component={DeviceDetails} />
    </Switch>
  )
};

export default RoutedContent;