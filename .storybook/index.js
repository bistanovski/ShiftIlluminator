import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import StoryRouter from 'storybook-react-router';

import { storiesOf } from '@storybook/react';
import { ShiftMqttClient } from '../src/MqttClient';

import Store from '../src/Store';
import Users from '../src/containers/Users';
import Charts from '../src/components/Charts';
import MainMenu from '../src/containers/MainMenu';
import MainAppBar from '../src/components/MainAppBar'
import DeviceCard from '../src/components/DeviceCard';
import SensorCard from '../src/components/SensorCard';
import DevicesList from '../src/containers/DevicesList';
import DeviceDetails from '../src/components/DeviceDetails';

const SampleDeviceData = {
  "device_id": "8CD1666115E2012A0220737C7D302C1E21D979B6",
  "name": "Asus Laptop",
  "type": "DESKTOP", //DESKTOP, MOBILE, EMBEDDED
  "operating_system": "Linux",
  "os_version": "16.04.5",
  "number_of_sensors": 6,
  "created_at": "2018-09-09 18:26:58",
  "updated_at": "2018-09-09 18:26:58"
};

const SampleSensorData = {
  "sensor_name": "Tilt",
  "device_id": "8CD1666115E2012A0220737C7D302C1E21D979B6",
  "type": "DESKTOP", //DESKTOP, MOBILE, EMBEDDED
  "operating_system": "Linux",
  "os_version": "16.04.5",
  "number_of_sensors": 10,
  "created_at": "2018-09-09 18:26:58",
  "updated_at": "2018-09-09 18:26:58",
  "sensor_readings": [
      {
        "reading_id": 25,
        "reading_name": "azimuth",
        "reading_type": "double",
        "rendering_type": "chart",
      },
      {
        "reading_id": 48,
        "reading_name": "X",
        "reading_type": "double",
        "rendering_type": "chart",
      },
      {
        "reading_id": 28,
        "reading_name": "xRotation",
        "reading_type": "double",
        "rendering_type": "chart",
      },
      {
        "reading_id": 32,
        "reading_name": "yRotation",
        "reading_type": "double",
        "rendering_type": "chart",
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
  .addDecorator(StoryRouter())
  .add('DevicesList', () => (
    <DevicesList></DevicesList>
  ))
  .add('Device card', () => (
    <DeviceCard deviceData={SampleDeviceData}></DeviceCard>
    ))
  .add('Sensor card', () => (
    <SensorCard sensorData={SampleSensorData} deviceType={SampleSensorData.type} mqttClient={ShiftMqttClient}></SensorCard>
    ))
  .add('Device details', () => (
    <DeviceDetails match={{params: {device_id: "8CD1666115E2012A0220737C7D302C1E21D979B6"}}}></DeviceDetails>
    ))
;