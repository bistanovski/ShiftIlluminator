import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

import { sourceImageBySensor, colorsByDevice } from '../utils/DeviceUtils';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
    borderRadius: '20px'
  },
  deviceImage: {
    width: 96,
    height: 96
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  }
};

class SensorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchActive: true,
      sensorData: props.sensorData,
      sensorName: props.sensorData.sensor_name,
    };
  }

  handleSwitch = (event) => {
    this.setState({ switchActive: !event.target.checked });
  };

  render() {
    const classes = this.props.classes;
    
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src={sourceImageBySensor(this.state.sensorData.sensor_name)}> N/A </Avatar>
          }
          action={
            <div>
              <Switch onChange={this.handleSwitch} />
            </div>
          }
          title={<b> {this.state.sensorData.sensor_name} </b>}
          subheader={this.state.sensorData.updated_at}
          style={{ 'backgroundColor': colorsByDevice(this.props.deviceType) }}
        >
        </CardHeader>

        <Divider />

        <CardContent className={classes.cardContent} >

          <Divider />
          <p></p>

        </CardContent>
      </Card>
    );
  }
}

SensorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SensorCard);