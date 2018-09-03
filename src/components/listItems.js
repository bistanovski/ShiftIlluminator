import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Typography variant="body2">
        <ListItemText primary="Dashboard" />
      </Typography>
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Typography variant="body2">
        <ListItemText primary="Devices" />
      </Typography>
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Typography variant="body2">
        <ListItemText primary="Users" />
      </Typography>
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Typography variant="body2">
        <ListItemText primary="Settings" />
      </Typography>
    </ListItem>
  </div>
);
