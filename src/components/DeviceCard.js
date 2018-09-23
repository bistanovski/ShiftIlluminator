import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import MobileIconImage from '../../statics/images/mobile-icon.png';
import DesktopIconImage from '../../statics/images/desktop-icon.png';
import EmbeddedIconImage from '../../statics/images/embedded-icon.png';

const DeviceTypes = {
  MOBILE: 'MOBILE',
  DESKTOP: 'DESKTOP',
  EMBEDDED: 'EMBEDDED'
};

const sourceImageByDevice = (type) => {
  switch(type){
    case DeviceTypes.MOBILE: return MobileIconImage;
    case DeviceTypes.DESKTOP: return DesktopIconImage;
    case DeviceTypes.EMBEDDED: return EmbeddedIconImage; 
  }
};

const colorsByDevice = (type) => {
  switch(type){
    case DeviceTypes.MOBILE: return '#e5d7a8';
    case DeviceTypes.DESKTOP: return '#c3d88a';
    case DeviceTypes.EMBEDDED: return '#b9e5da'; 
  }
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 360,
  },
  cardActionArea: {
    display: 'flex',
    flexDirection: 'column',
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

class DeviceCard extends React.Component {
  render() {
    const classes = this.props.classes;
    const deviceData = this.props.deviceData;
    console.log('Props:', this.props);
    return (
      <Card className={classes.card}>
        <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar} src={sourceImageByDevice(deviceData.type)}> N/A </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={<b> {deviceData.name} </b>}
            subheader= {deviceData.updated_at}
            style={{'background-color': colorsByDevice(deviceData.type)}}
          />
        <CardActionArea className={classes.cardActionArea} >
          <CardContent className={classes.cardContent} style={{'background-color': colorsByDevice(deviceData.type)}}>
            <Typography gutterBottom component="p">
              {deviceData.device_id}
            </Typography>
            <Typography gutterBottom component="p">
              <b>OS:</b> <i> {deviceData.operating_system} </i>
            </Typography>
            <Typography gutterBottom component="p">
              <b>OS Version:</b> <i> {deviceData.os_version} </i>
            </Typography>
            <Typography gutterBottom component="p">
              <b>Number of sensors:</b> <i> {deviceData.number_of_sensors} </i>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{'background-color': colorsByDevice(deviceData.type)}}>
        <div className={classes.cardActions}>
          <Button size="small" color="primary">
            <strong>Sensors</strong>
          </Button>
          <Button size="small" color="primary">
          <strong>Delete</strong>
          </Button>
        </div>
        </CardActions>
      </Card>
    );
  }
}

DeviceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeviceCard);