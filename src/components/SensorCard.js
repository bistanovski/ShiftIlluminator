import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { sourceImageBySensor, colorsByDevice } from '../utils/DeviceUtils';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto'
  },
  deviceImage: {
    width: 96,
    height: 96
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
  },
  cardActions: {
    display: 'flex',
    alignItems: 'center'
  }
};

function TabContainer(props) {
  return (
    <div>
      <Typography>
        {props.children}
      </Typography>
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


class SensorCard extends React.Component {
  state = {
    tabIndex: 0
  };

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex: tabIndex });
  };

  render() {
    const classes = this.props.classes;
    const sensorData = this.props.sensorData;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src={sourceImageBySensor(sensorData.sensor_name)}> N/A </Avatar>
          }
          title={<b> {sensorData.sensor_name} </b>}
          subheader={sensorData.updated_at}
          style={{ 'backgroundColor': colorsByDevice(sensorData.type) }}
        >
        </CardHeader>

        <Divider />

        <CardContent className={classes.cardContent} >
          <Tabs value={this.state.tabIndex} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered>
            {sensorData.sensor_readings.map(sensorReading => (
              <Tab label={sensorReading.reading_name} />
            ))}
          </Tabs>

          <Divider />
          <p></p> 

          {sensorData.sensor_readings.map((sensorReading, index) => (
            this.state.tabIndex === index && <TabContainer> {sensorReading.reading_id} </TabContainer>
          ))}

        </CardContent>
      </Card>
    );
  }
}

SensorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SensorCard);