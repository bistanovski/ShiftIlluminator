import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import RestClient from '../RestClient';
import { sourceImageByDevice, colorsByDevice } from '../utils/DeviceUtils';

const styles = theme =>({
  detailsTitle: {
    backgroundColor: 'yellow',
  },
});

class DeviceDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        deviceID : props.match.params.device_id,
        deviceSensors: []
    };
  }

  render () {
    const classes = this.props.classes;
    return (
      <div id="root">
          <div className={classes.detailsTitle}>
            <Typography variant="display1" gutterBottom>
              Device
            </Typography>
            {this.state.deviceID}
          </div>
      </div>
    )
  }

  onSuccessSensorsFetch(response) {
    console.log("SensorsFetch success:", response);
    this.setState({ deviceSensors: response.data })
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