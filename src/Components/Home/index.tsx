import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { CssBaseline, Container, Grid, Paper } from '@material-ui/core';
import MenuBar from './menuBar';
import Chart from './chart';
import Orders from './orders';
import { getRooms } from '../../selectors';
import { fetchRooms } from '../../actions/rooms';
import { fetchStaff } from '../../actions/staff';
import { fetchAccommodation } from '../../actions/accommodation';
import { fetchCategoryRooms } from '../../actions/categoryRooms';
import { fetchServices } from '../../actions/services';
import useStyles from '../styles';

const Home = (props: any) => {
  const classes = useStyles();

  const {
    fetchRoomsAction,
    fetchStaffAction,
    fetchAccommodationAction,
    fetchCategoryRoomsAction,
    fetchServicesAction,
  } = props;

  useEffect(() => {
    fetchRoomsAction();
    fetchStaffAction();
    fetchAccommodationAction();
    fetchCategoryRoomsAction();
    fetchServicesAction();
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}

            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    rooms: getRooms(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRoomsAction: () => dispatch(fetchRooms()),
    fetchStaffAction: () => dispatch(fetchStaff()),
    fetchAccommodationAction: () => dispatch(fetchAccommodation()),
    fetchCategoryRoomsAction: () => dispatch(fetchCategoryRooms()),
    fetchServicesAction: () => dispatch(fetchServices()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
