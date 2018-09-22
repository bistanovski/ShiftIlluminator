import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import MainMenu from './MainMenu';
import RoutedContent from '../RoutedContent'

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

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className={classes.root}>
            <MainMenu/>
            <main className={classes.content}>
              <RoutedContent></RoutedContent>
            </main>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);