import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import {Container, CssBaseline, Grid, Paper} from "@material-ui/core";
import MenuBar from './menuBar';
import {getRooms, isRoomsFetched} from '../../selectors';
import {fetchRooms, addRoom, deleteRoom, updateRoom} from '../../actions/rooms';
import useStyles from '../styles';

const Rooms = (props) => {
  const classes = useStyles();

  const {rooms, isRoomsFetched, fetchRoomsAction, addRoomAction, deleteRoomAction, updateRoomAction} = props;

  useEffect(() => {
    fetchRoomsAction();
  }, []);

  const validateFields = (data) => {
    if (Object.keys(data).length === 0) {
      alert('Please add info');
      return false;
    }

    if (typeof data.number === 'undefined' || data.number === '') {
      alert('Please add number');
      return false;
    }

    if (typeof data.rooms === 'undefined' || data.rooms === '') {
      alert('Please add rooms');
      return false;
    }

    if (typeof data.cost_per_day === 'undefined' || data.cost_per_day === '') {
      alert('Please add cost per day');
      return false;
    }

    return true;
  }

  const columns = [
    {title: 'Number', field: 'number', type: 'numeric'},
    {title: 'Rooms', field: 'rooms', type: 'numeric'},
    {title: 'Cost per day', field: 'cost_per_day', type: 'numeric'},
  ];

  const options = {
    addRowPosition: 'first',
    draggable: false,
    paging: false,
    toolbarButtonAlignment: 'left',
  };

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <MenuBar/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {isRoomsFetched && <MaterialTable
                  title="Rooms"
                  options={options}
                  columns={columns}
                  data={rooms}
                  editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        if (validateFields(newData)) {
                          Promise.resolve(addRoomAction(newData)).then(() => {
                            fetchRoomsAction();
                          }).then(() => {
                            resolve();
                          });
                        } else {
                          reject();
                        }
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve, reject) => {
                        if (validateFields(newData)) {
                          Promise.resolve(updateRoomAction(newData)).then(() => {
                            fetchRoomsAction();
                          }).then(() => {
                            resolve();
                          });
                        } else {
                          reject();
                        }
                      }),
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        Promise.resolve(deleteRoomAction(oldData.id)).then(() => {
                          fetchRoomsAction();
                        }).then(() => {
                          resolve();
                        });
                      }),
                  }}
                />}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    rooms: getRooms(state),
    isRoomsFetched: isRoomsFetched(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRoomsAction: () => dispatch(fetchRooms()),
    addRoomAction: (fields) => dispatch(addRoom(fields)),
    deleteRoomAction: (id) => dispatch(deleteRoom(id)),
    updateRoomAction: (fields) => dispatch(updateRoom(fields)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
