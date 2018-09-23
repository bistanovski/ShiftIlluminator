import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import DeviceCard from '../components/DeviceCard';

import RestClient from '../RestClient';

const styles = theme =>({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
});

class Devices extends React.Component {
  state = {
    devicesData: []
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={290}>
          {this.state.devicesData.map( device => (
            <GridListTile style={{'width': '360', 'margin': 10}}>
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

Devices.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Devices);
