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

import FusionCharts from 'fusioncharts/core';
import Realtimeline from 'fusioncharts/viz/realtimeline';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import ReactFC from 'react-fusioncharts';
ReactFC.fcRoot(FusionCharts, Realtimeline, FusionTheme);

import { sourceImageBySensor, colorsByDevice } from '../../utils/DeviceUtils';

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
    alignItems: 'left'
  }
};


class AccelerometerSensorCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchActive: true,
      sensorData: props.sensorData,
      sensorName: props.sensorData.sensor_name,
      mqttTopic: props.sensorData.device_id + '_' + props.sensorData.sensor_name,
      mqttClient: props.mqttClient,

      numberOfReceivedMsgs: 0,
      chartLabelsArray: [],
      xData: [],
      yData: [],
      zData: []
    };

    this.subscribeToMqttTopic(this.state.mqttTopic);
  }

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
      let messageData = JSON.parse(message.toString());
      console.log('topic: ', topic, ' message:', messageData);
      
      this.setState({ numberOfReceivedMsgs: this.state.numberOfReceivedMsgs + 1});
      this.setState({ chartLabelsArray: [ ...this.state.chartLabelsArray, {"label": "" + parseInt(this.state.numberOfReceivedMsgs)} ] })
      
      this.setState({ xData: [ ...this.state.xData, {"value": messageData.xVal} ] })
      this.setState({ yData: [ ...this.state.yData, {"value": messageData.yVal} ] })
      this.setState({ zData: [ ...this.state.zData, {"value": messageData.zVal} ] })
    }
  };

  render() {
    const classes = this.props.classes;
    
    let chartDataSource = {
      "chart": {
        "caption": "Sensor " + this.state.sensorName + " ticker",
        "numdisplaysets": "20",
        "showrealtimevalue": "1",
        "theme": "fusion",
        "plottooltext": "$seriesname: <b>$dataValue</b>",
        "setadaptiveymin": "1"
      },
      "categories": [
        {
          "category": this.state.chartLabelsArray
        }
      ],
      "dataset": [
        {
          "seriesname": "x",
          "data": this.state.xData
        },
        {
          "seriesname": "y",
          "data": this.state.yData
        },
        {
          "seriesname": "z",
          "data": this.state.zData
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

          <ReactFC
          type = "realtimeline"
          width = '100%'
          height = '100%'
          dataFormat = "JSON"
          dataSource = {chartDataSource} />

          <Divider />
          <p></p>

        </CardContent>
      </Card>
    );
  }
}

AccelerometerSensorCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccelerometerSensorCard);