import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Store from '../src/Store';
import Users from '../src/containers/Users';
import Devices from '../src/containers/Devices';
import Charts from '../src/components/Charts';
import MainMenu from '../src/containers/MainMenu';
import MainAppBar from '../src/components/MainAppBar'
import DeviceCard from '../src/components/DeviceCard';

const SampleDeviceData = {
  "device_id": "8CD1666115E2012A0220737C7D302C1E21D979B3",
  "name": "Asus Laptop",
  "type": "DESKTOP", //DESKTOP, MOBILE, EMBEDDED
  "operating_system": "Linux",
  "os_version": "16.04.5",
  "number_of_sensors": 6,
  "created_at": "2018-09-09 18:26:58",
  "updated_at": "2018-09-09 18:26:58",
  "sensors": [
      {
          "id": 5,
          "sensor_name": "TestSensor",
          "device_id": "8CD1666115E2012A0220737C7D302C1E21D979B3",
          "number_of_readings": 6,
          "created_at": "2018-09-09 18:26:58",
          "updated_at": "2018-09-09 18:26:58",
          "sensor_readings": []
      }
  ]
};

storiesOf('AppBars', module)
  .addDecorator(story => <Provider store={Store}>{story()}</Provider>)
  .add('Main app bar', () => (
    <MainAppBar></MainAppBar>
  ))
;

storiesOf('Menus', module)
  .addDecorator(story => <Provider store={Store}>{story()}</Provider>)
  .add('Main menu', () => (
    <BrowserRouter>
      <MainMenu/>
    </BrowserRouter>
  ))
;

storiesOf('Users', module)
  .add('All Users', () => (
    <Users></Users>
  ))
;

storiesOf('Charts', module)
  .addDecorator(story => <Provider store={Store}>{story()}</Provider>)
  .add('All Charts', () => (
      <Charts></Charts>
    ))
;

storiesOf('Devices', module)
  .addDecorator(story => <Provider store={Store}>{story()}</Provider>)
  .add('All Devices', () => (
    <Devices></Devices>
  ))
  .add('Device card', () => (
    <DeviceCard deviceData={SampleDeviceData}></DeviceCard>
    ))
;