import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MainMenu from './components/MainMenu';
import SimpleTable from './components/SimpleTable';
import SimpleLineChart from './components/SimpleLineChart';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 64,
    height: '100vh',
    overflow: 'auto',
  }
});

class MainApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showOrdersChart: true
    }
  }
  
  onToggleOrdersChart() {
    this.setState({
      showOrdersChart: !this.state.showOrdersChart
    })
  }

  render() {
    const { classes } = this.props;
    
    let ordersChart = "";
    if(this.state.showOrdersChart) {
      ordersChart = (
        <SimpleLineChart />
      );
    }
    
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
        <MainMenu toggleCharts={this.onToggleOrdersChart.bind(this)}/>
        <main className={classes.content}>
          {ordersChart}
          <SimpleTable/>
        </main>
        </div>
      </React.Fragment>
    );
  }
}

MainApp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainApp);
