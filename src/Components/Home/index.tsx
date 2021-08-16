import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import clsx from 'clsx';
import {
  CssBaseline,
  Container,
  Grid,
  Paper
} from '@material-ui/core';
import MenuBar from './menuBar';
import Chart from './chart';
import Deposits from './deposit';
import Orders from './orders';
import {getRooms} from '../../selectors';
import {fetchRooms} from '../../actions/rooms';
import useStyles from '../styles';

const Home = (props: any) => {
  const classes = useStyles();

  const {rooms, fetchRoomsAction} = props;

  useEffect(() => {
    //fetchRoomsAction();
  }, []);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <MenuBar/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits/>
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders/>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    rooms: getRooms(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchRoomsAction: () => dispatch(fetchRooms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
