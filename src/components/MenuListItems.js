import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import BarChartIcon from '@material-ui/icons/BarChartOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import DevicesIcon from '@material-ui/icons/DevicesOutlined';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'

let menuItemsTextColor = '#d2d5db';

export const mainListItems = (
  <div>
    <Link to='/' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{color: menuItemsTextColor}}>
          <DashboardIcon />
        </ListItemIcon>
        <Typography variant="body2" >
          <ListItemText>
            <span style={{ color: menuItemsTextColor }}>Dashboard</span>
          </ListItemText>
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/devices' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{color: menuItemsTextColor}}>
          <DevicesIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText>
            <span style={{ color: menuItemsTextColor }}>Devices</span>
          </ListItemText>
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/users' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{color: menuItemsTextColor}}>
          <PeopleIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText>
            <span style={{ color: menuItemsTextColor }}>Users</span>
          </ListItemText>
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/charts' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{color: menuItemsTextColor}}>
          <BarChartIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText>
            <span style={{ color: menuItemsTextColor }}>Charts</span>
          </ListItemText>
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/settings' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon style={{color: menuItemsTextColor}}>
          <SettingsIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText>
            <span style={{ color: menuItemsTextColor }}>Settings</span>
          </ListItemText>
        </Typography>
      </ListItem>
    </Link>
  </div>
);
