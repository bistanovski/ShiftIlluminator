import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

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
    width: 360
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
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = (event) => {
    this.setState({ anchorEl: null });
  };

  handleDelete = (device_id) => {
    console.log("Deleting:", device_id)
    this.setState({ anchorEl: null });
  };

  render() {
    const classes = this.props.classes;
    const deviceData = this.props.deviceData;
    return (
      <Card className={classes.card}>
        <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar} src={sourceImageByDevice(deviceData.type)}> N/A </Avatar>
            }
            action={
              <div>
                <IconButton aria-owns={this.state.open ? 'long-menu' : undefined} aria-haspopup="true" onClick={this.handleClick}>
                  <MoreVertIcon />
                </IconButton>
                <Menu id="long-menu" anchorEl={this.state.anchorEl} open={Boolean(this.state.anchorEl)} onClose={this.handleClose}  >
                  <MenuItem onClick={() => this.handleDelete(deviceData.device_id)}>Delete</MenuItem>
                </Menu>
              </div>
            }
            title={<b> {deviceData.name} </b>}
            subheader= {deviceData.updated_at}
            style={{'backgroundColor': colorsByDevice(deviceData.type)}}
          >
        </CardHeader>
        <Link to={'/device/' + deviceData.device_id} style={{ textDecoration: 'none' }}>
          <CardActionArea className={classes.cardActionArea} >
            <CardContent className={classes.cardContent} style={{'backgroundColor': colorsByDevice(deviceData.type)}}>
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
        </Link>
      </Card>
    );
  }
}

DeviceCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeviceCard);