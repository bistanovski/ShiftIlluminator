import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

import RestClient from '../RestClient';
import SensorCard from '../components/SensorCard';
import { sourceImageByDevice, colorsByDevice } from '../utils/DeviceUtils';
import { ListItem } from '@material-ui/core';

const styles = theme => ({
  devicePaper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    borderRadius: '40px',
    backgroundColor: '#627f78'
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
                <SensorCard sensorData={sensor} deviceType={this.state.deviceType}></SensorCard>
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