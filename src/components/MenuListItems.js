import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import BarChartIcon from '@material-ui/icons/BarChartOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
    <Link to='/' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText primary="Dashboard" />
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/devices' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText primary="Devices" />
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/users' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText primary="Users" />
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/charts' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText primary="Charts" />
        </Typography>
      </ListItem>
    </Link>
    <Divider />
    <Link to='/settings' style={{ textDecoration: 'none' }}>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText primary="Settings" />
        </Typography>
      </ListItem>
    </Link>
  </div>
);
