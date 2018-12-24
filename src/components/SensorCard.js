import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import FusionCharts from 'fusioncharts/core';
import Realtimeline from 'fusioncharts/viz/realtimeline';
import GammelTheme from 'fusioncharts/themes/es/fusioncharts.theme.gammel';
import ReactFC from 'react-fusioncharts';
ReactFC.fcRoot(FusionCharts, Realtimeline, GammelTheme);

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
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      switchActive: true,
      sensorData: props.sensorData,
      sensorName: props.sensorData.sensor_name,
      mqttTopic: props.sensorData.device_id + '_' + props.sensorData.sensor_name,
      mqttClient: props.mqttClient,

      numberOfReceivedMsgs: 0,
      chartLabelsArray: [],
      chartDataArray: []
    };
    this.subscribeToMqttTopic(this.state.mqttTopic);
  }

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex: tabIndex });
  };

  handleSwitch = (event) => {
    this.setState({ switchActive: !event.target.checked });
  };

  subscribeToMqttTopic = (topic) => {
    this.state.mqttClient.subscribe(topic, function(error) {
      if(!error) {
        console.log('Subscribed to: ', topic);
        this.state.mqttClient.on('error', this.onMqttError);
        this.state.mqttClient.on('message', this.onNewMqttMessage);
      }
      else {
        console.log('Subscribed to: ', topic, ' failed. Error: ', error.message);
      }
    }.bind(this))
  };

  onMqttError = (error) => {
    console.log('MqttError:', error);
  };

  onNewMqttMessage = (topic, message) => {
    if(topic === this.state.mqttTopic) 
    {
      console.log('topic: ', topic, ' message:', message.toString());
      let readingsList = message.toString().split(';');
      
      this.setState({ numberOfReceivedMsgs: this.state.numberOfReceivedMsgs + 1});
      this.setState({ chartLabelsArray: [ ...this.state.chartLabelsArray, {"label": "" + parseInt(this.state.numberOfReceivedMsgs)} ] })

      readingsList.forEach(function(reading) {
        let readingObject = reading.split(':');
        let readingName = readingObject[0];
        let readingValue = readingObject[1];
        this.setState({ chartDataArray: [ ...this.state.chartDataArray, {"value": readingValue} ] })
      }.bind(this));

    }
  };

  render() {
    const classes = this.props.classes;
    
    let chartDataSource = {
      "chart": {
        "caption": "Sensor " + this.state.sensorName + " ticker",
        "numdisplaysets": "20",
        "showrealtimevalue": "1",
        "theme": "gammel",
        "plottooltext": "$label: <b>$dataValue</b>",
        "setadaptiveymin": "1"
      },
      "categories": [
        {
          "category": this.state.chartLabelsArray
        }
      ],
      "dataset": [
        {
          "data": this.state.chartDataArray
        }
      ]
    }

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
          <Tabs value={this.state.tabIndex} onChange={this.handleChange} indicatorColor="primary" textColor="primary" centered>
            {this.state.sensorData.sensor_readings.map(sensorReading => (
              <Tab label={sensorReading.reading_name} key={sensorReading.reading_id} />
            ))}
          </Tabs>

        <ReactFC
         type = "realtimeline"
         width = '100%'
         height = '100%'
         dataFormat = "JSON"
         dataSource = {chartDataSource} />

          <Divider />
          <p></p>

          {this.state.sensorData.sensor_readings.map((sensorReading, index) => (
            this.state.tabIndex === index && <TabContainer key={sensorReading.reading_id}> {sensorReading.reading_id} </TabContainer>
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