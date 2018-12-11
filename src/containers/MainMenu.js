import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import { MainDrawerWidth, MainAppBarHeight } from '../Styles';
import  MainAppBar from '../components/MainAppBar';
import { mainListItems } from '../components/MenuListItems';

const styles = theme => ({
  drawerPaper: {
    width: MainDrawerWidth,
    height: '100%',
    marginTop: MainAppBarHeight,
    backgroundImage: 'linear-gradient(to top, #191d52 , #216e93)'
  }
});

class MainMenu extends React.Component {
render() {
  const { classes } = this.props;
    return (
      <div className={classes.mainMenu}>
        <MainAppBar/>
        <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
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
