import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { mainListItems } from './listItems';

const drawerWidth = 180;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '100vh'
  },
  toolbar: theme.mixins.toolbar,
  toggleChartsButton: {
    marginLeft: 15,
  }
});

class MainMenu extends React.Component {
render() {
  const { classes } = this.props;
  return (
      <div className={classes.mainMenu}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="title" color="inherit" noWrap className={classes.title}>
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Button onClick={this.props.toggleCharts} variant="contained" color="secondary" className={classes.toggleChartsButton}>
              Toggle charts
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>{mainListItems}</List>
        </Drawer>
      </div>
    );
  } 
}

MainMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  greetMethod: PropTypes.func
};

export default withStyles(styles)(MainMenu);
