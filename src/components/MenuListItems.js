import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'

export const mainListItems = (
  <div>
    <Link to='/'>
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
    <Link to='/devices'>
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
    <Link to='/users'>
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
    <Link to='/settings'>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <Typography variant="body2">
          <ListItemText primary="Settings" />
        </Typography>
      </ListItem>
    </Link>
  </div>
);
