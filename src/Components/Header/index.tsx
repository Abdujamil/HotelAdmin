import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import useStyles from '../styles';

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item xs={10}>
              <Link className={classes.menuButton} to="/" color="primary">
                Home
              </Link>
              <Link className={classes.menuButton} to="/users" color="inherit">
                Users
              </Link>
              <Link
                className={classes.menuButton}
                to="/clients"
                color="inherit"
              >
                Clients
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/login" color="inherit">
                Login
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
