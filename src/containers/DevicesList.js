import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DeviceCard from '../components/DeviceCard';

import RestClient from '../RestClient';

class DevicesList extends React.Component {
  state = {
    devicesData: []
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Devices
        </Typography>
        <GridList cellHeight={220}>
          {this.state.devicesData.map( device => (
            <GridListTile style={{'width': '360', 'margin': 10}} key={device.device_id}>
              <DeviceCard deviceData={device}></DeviceCard>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  onSuccessDevicesFetch(response) {
    console.log("DevicesFetch success:", response);
    this.setState({ devicesData: response.data })
  }
  
  onErrorDevicesFetch(error) {
    console.log("DevicesFetch failed:", error);
  }

  componentDidMount() {
    RestClient.getDevices(this.onSuccessDevicesFetch.bind(this), this.onErrorDevicesFetch.bind(this));
  }
}

DevicesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (DevicesList);
