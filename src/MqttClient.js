import mqtt from 'mqtt';

let ShiftMqttClient = mqtt.connect('mqtt://127.0.0.1:15675/ws');

ShiftMqttClient.on('connect', function () {
  console.log('ShiftMqttClient connected!');
})

ShiftMqttClient.on('error', function(error) {
  console.log('ShiftMqttClient error:', error);
})

export {ShiftMqttClient};