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
                <TableCell><Typography gutterBottom component="p"><strong>Username</strong></Typography></TableCell>
                <TableCell><Typography gutterBottom component="p"><strong>Email</strong></Typography></TableCell>
                <TableCell><Typography gutterBottom component="p"><strong>First Name</strong></Typography></TableCell>
                <TableCell><Typography gutterBottom component="p"><strong>Last Name</strong></Typography></TableCell>
                <TableCell><Typography gutterBottom component="p"><strong>Updated</strong></Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.usersData.map(n => {
                return (
                  <TableRow key={n.username}>
                    <TableCell>
                      <Typography gutterBottom component="p">
                        {n.username}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography gutterBottom component="p">
                        {n.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography gutterBottom component="p">
                        {n.first_name}
                      </Typography>
                    </TableCell>
                    <TableCell>  
                      <Typography gutterBottom component="p">
                        {n.last_name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography gutterBottom component="p">
                        {n.updated_at}
                      </Typography>
                    </TableCell>
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
