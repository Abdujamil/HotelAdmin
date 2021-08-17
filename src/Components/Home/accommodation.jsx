import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import { Container, CssBaseline, Grid, Paper } from '@material-ui/core';
import MenuBar from './menuBar';
import {
  getAccommodation,
  isAccommodationFetched,
  getStaff,
  getRooms 
} from '../../selectors';
import {
  fetchAccommodation,
  addAccommodation,
  deleteAccommodation,
  updateAccommodation,
} from '../../actions/accommodation';
import useStyles from '../styles';

const Accommodation = (props) => {
  const classes = useStyles();

  const {
    accommodation,
    isAccommodationFetched,
    fetchAccommodationAction,
    addAccommodationAction,
    deleteAccommodationAction,
    updateAccommodationAction,
    staff,
    rooms
  } = props;

  const validateFields = (data) => {
    if (Object.keys(data).length === 0) {
      alert('Please add info');
      return false;
    }

    /*  if (typeof data.room_id === 'undefined' || data.room_id === '') {
      alert('Please add room_id');
      return false;
    }

    if (typeof data.arrival_date === 'undefined' || data.arrival_date === '') {
      alert('Please add arrival_date');
      return false;
    }

    if (
      typeof data.departure_date === 'undefined' ||
      data.departure_date === ''
    ) {
      alert('Please add departure_date');
      return false;
    }
    if (typeof data.cost === 'undefined' || data.cost === '') {
      alert('Please add cost');
      return false;
    }
    if (typeof data.staff_id === 'undefined' || data.staff_id === '') {
      alert('Please add staff_id');
      return false;
    }
    if (typeof data.client_id === 'undefined' || data.client_id === '') {
      alert('Please add client_id');
      return false;
    } */

    return true;
  };

  let staffObject = staff.reduce(function (acc, cur, i) {
    acc[cur.id] = cur.name;

    return acc;
  }, {});

  let roomsObject = rooms.reduce(function (acc, cur, i) {
    acc[cur.id] = cur.number;

    return acc;
  }, {});

  const columns = [
    { title: 'Room', field: 'room_id', lookup: roomsObject },
    { title: 'Arrival date', field: 'arrival_date', type: 'date' },
    { title: 'Departure date', field: ' departure_date', type: 'date' },
    { title: 'Cost', field: ' cost', type: 'currency' },
    { title: 'Staff', field: ' staff_id', lookup: staffObject },
  ];

  const options = {
    addRowPosition: 'first',
    draggable: false,
    paging: false,
    toolbarButtonAlignment: 'left',
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {isAccommodationFetched && (
                  <MaterialTable
                    title="Accommodation"
                    options={options}
                    columns={columns}
                    data={accommodation}
                    editable={{
                      onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                          if (validateFields(newData)) {
                            Promise.resolve(addAccommodationAction(newData))
                              .then(() => {
                                fetchAccommodationAction();
                              })
                              .then(() => {
                                resolve();
                              });
                          } else {
                            reject();
                          }
                        }),
                      onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                          if (validateFields(newData)) {
                            Promise.resolve(updateAccommodationAction(newData))
                              .then(() => {
                                fetchAccommodationAction();
                              })
                              .then(() => {
                                resolve();
                              });
                          } else {
                            reject();
                          }
                        }),
                      onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                          Promise.resolve(deleteAccommodationAction(oldData.id))
                            .then(() => {
                              fetchAccommodationAction();
                            })
                            .then(() => {
                              resolve();
                            });
                        }),
                    }}
                  />
                )}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    accommodation: getAccommodation(state),
    isAccommodationFetched: isAccommodationFetched(state),
    staff: getStaff(state),
    rooms: getRooms(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccommodationAction: () => dispatch(fetchAccommodation()),
    addAccommodationAction: (fields) => dispatch(addAccommodation(fields)),
    deleteAccommodationAction: (id) => dispatch(deleteAccommodation(id)),
    updateAccommodationAction: (fields) =>
      dispatch(updateAccommodation(fields)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accommodation);
