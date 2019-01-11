import React from 'react';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircleOutlined';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { setOrdersChartVisibility } from '../actions/ChartActions';
import { MainAppBarHeight } from '../Styles';

const styles = theme => ({
  title: {
    flexGrow: 1
  },
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
    height: MainAppBarHeight,
    backgroundImage: 'linear-gradient(to left, #191d52 , #216e93)'
  },
  toggleChartsButton: {
    marginLeft: 15,
  },
  accountButton: {
    position: 'relative',
    marginLeft: 10,
  }
});

class MainAppBar extends React.Component {
render() {
  const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit" noWrap className={classes.title}>
            Shift illuminator
          </Typography>
          <Button onClick={() => this.props.setOrdersChartVisible(!this.props.showOrdersChart.visible)} variant="contained" color="secondary" className={classes.toggleChartsButton}>
            Toggle charts
          </Button>
          <IconButton style={{'color': 'white'}} className={classes.accountButton}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrdersChartVisible: (visible) => {
      dispatch(setOrdersChartVisibility(visible));
    }
  };
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MainAppBar));
