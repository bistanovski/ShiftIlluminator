import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import RestClient from '../RestClient';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

class Users extends React.Component {
  state = {
    usersData: []
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.usersData.map(n => {
                return (
                  <TableRow key={n.username}>
                    <TableCell>{n.username}</TableCell>
                    <TableCell>{n.email}</TableCell>
                    <TableCell>{n.first_name}</TableCell>
                    <TableCell>{n.last_name}</TableCell>
                    <TableCell>{n.updated_at}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  onSuccessUsersFetch(response) {
    console.log("UsersFetch success:", response);
    this.setState({ usersData: response.data })
  }
  
  onErrorUsersFetch(error) {
    console.log("UsersFetch failed:", error);
  }

  componentDidMount() {
    RestClient.getUsers(this.onSuccessUsersFetch.bind(this), this.onErrorUsersFetch.bind(this));
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);
