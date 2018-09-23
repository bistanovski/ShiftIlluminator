import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';

import MainMenu from './MainMenu';
import RoutedContent from '../RoutedContent'
import { CustomStyles, CustomTheme } from '../Styles';

class App extends React.Component {
render() {
  const { classes } = this.props;
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <MuiThemeProvider theme={CustomTheme}>
            <div className={classes.root}>
              <MainMenu/>
              <main className={classes.content}>
                <RoutedContent></RoutedContent>
              </main>
            </div>
          </MuiThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withStyles(CustomStyles)(App));