import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

import RestClient from '../RestClient';
import SensorCard from './SensorCard';
import TiltSensorCard from './sensorCards/TiltSensorCard';
import LightSensorCard from './sensorCards/LightSensorCard';
import CompassSensorCard from './sensorCards/CompassSensorCard';
import RotationSensorCard from './sensorCards/RotationSensorCard';
import GyroscopeSensorCard from './sensorCards/GyroscopeSensorCard';
import ProximitySensorCard from './sensorCards/ProximitySensorCard';
import OrientationSensorCard from './sensorCards/OrientationSensorCard';
import AmbientLightSensorCard from './sensorCards/AmbientLightSensorCard';
import MagnetometerSensorCard from './sensorCards/MagnetometerSensorCard';
import AccelerometerSensorCard from './sensorCards/AccelerometerSensorCard';
import { ListItem } from '@material-ui/core';

import { ShiftMqttClient } from '../MqttClient';

const styles = theme => ({
  devicePaper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    borderRadius: '20px',
    backgroundColor: '#257faa'
  },
});

class DeviceDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceID: props.match.params.device_id,
      deviceSensors: [],
      deviceName: '',
      deviceOS: '',
      deviceOSVersion: '',
      deviceType: '',
    };
  }

  render() {
    const classes = this.props.classes;
    return (
      <div id="root">
        <div>

          <Paper className={classes.devicePaper} elevation={10}>
            {this.state.deviceSensors.length > 0 &&
              <Typography variant="h5" component="h3" style={{ 'color': 'white' }}>
                {this.state.deviceName} &nbsp; | &nbsp;
                {this.state.deviceOS} {this.state.deviceOSVersion} &nbsp; | &nbsp;
                {this.state.deviceType}
              </Typography>
            }
            <Typography component="p" style={{ 'color': 'white' }}>
              {this.state.deviceID}
            </Typography>
          </Paper>

          <List>
            {this.state.deviceSensors.map(sensor => (
              <ListItem style={{ 'width': '100%' }} key={sensor.id}>
                
                {
                  sensor.sensor_name === "Tilt" ? <TiltSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></TiltSensorCard> :
                  sensor.sensor_name === "Light" ? <LightSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></LightSensorCard> :
                  sensor.sensor_name === "Compass" ? <CompassSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></CompassSensorCard> :
                  sensor.sensor_name === "Rotation" ? <RotationSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></RotationSensorCard> :
                  sensor.sensor_name === "Gyroscope" ? <GyroscopeSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></GyroscopeSensorCard> :
                  sensor.sensor_name === "Proximity" ? <ProximitySensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></ProximitySensorCard> :
                  sensor.sensor_name === "Orientation" ? <OrientationSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></OrientationSensorCard> :
                  sensor.sensor_name === "AmbientLight" ? <AmbientLightSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></AmbientLightSensorCard> :
                  sensor.sensor_name === "Magnetometer" ? <MagnetometerSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></MagnetometerSensorCard> :
                  sensor.sensor_name === "Accelerometer" ? <AccelerometerSensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></AccelerometerSensorCard> :
                  <SensorCard sensorData={sensor} deviceType={this.state.deviceType} mqttClient={ShiftMqttClient}></SensorCard>
                }
             
              </ListItem>
            ))}
          </List>

        </div>
      </div>
    )
  }

  onSuccessSensorsFetch(response) {
    this.setState({ deviceType: response.data[0].type })
    this.setState({ deviceName: response.data[0].name })
    this.setState({ deviceOS: response.data[0].operating_system })
    this.setState({ deviceOSVersion: response.data[0].os_version })
    this.setState({ deviceSensors: response.data[0].sensors })
  }

  onErrorSensorsFetch(error) {
    console.log("SensorsFetch failed:", error);
  }

  componentDidMount() {
    RestClient.getDeviceSensors(this.state.deviceID, this.onSuccessSensorsFetch.bind(this), this.onErrorSensorsFetch.bind(this));
  }
}

DeviceDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeviceDetails);