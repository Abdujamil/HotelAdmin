import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import {Container, CssBaseline, Grid, Paper} from "@material-ui/core";
import MenuBar from './menuBar';
import {getCategoryRooms, isCategoryRoomsFetched} from '../../selectors';
import {fetchCategoryRooms, addCategoryRooms, deleteCategoryRooms, updateCategoryRooms} from '../../actions/categoryRooms';
import useStyles from '../styles';

const CategoryRooms = (props) => {
  const classes = useStyles();

  const {categoryRooms, isCategoryRoomsFetched, fetchCategoryRoomsAction, addCategoryRoomsAction, deleteCategoryRoomsAction, updateCategoryRoomsAction} = props;

  const validateFields = (data) => {
    if (Object.keys(data).length === 0) {
      alert('Please add info');
      return false;
    }

    if (typeof data.name === 'undefined' || data.name === '') {
      alert('Please add name');
      return false;
    }

    if (typeof data.description === 'undefined' || data.description === '') {
      alert('Please add description');
      return false;
    }

    return true;
  }

  const columns = [
    {title: 'Name', field: 'name', type: 'text'},
    {title: 'Descripton', field: 'description', type: 'text'},
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
                {isCategoryRoomsFetched && <MaterialTable
                  title="Rooms category"
                  options={options}
                  columns={columns}
                  data={categoryRooms}
                  editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        if (validateFields(newData)) {
                          Promise.resolve(addCategoryRoomsAction(newData)).then(() => {
                            fetchCategoryRoomsAction();
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
                          Promise.resolve(updateCategoryRoomsAction(newData)).then(() => {
                            fetchCategoryRoomsAction();
                          }).then(() => {
                            resolve();
                          });
                        } else {
                          reject();
                        }
                      }),
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        Promise.resolve(deleteCategoryRoomsAction(oldData.id)).then(() => {
                          fetchCategoryRoomsAction();
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
    categoryRooms: getCategoryRooms(state),
    isCategoryRoomsFetched: isCategoryRoomsFetched(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryRoomsAction: () => dispatch(fetchCategoryRooms()),
    addCategoryRoomsAction: (fields) => dispatch(addCategoryRooms(fields)),
    deleteCategoryRoomsAction: (id) => dispatch(deleteCategoryRooms(id)),
    updateCategoryRoomsAction: (fields) => dispatch(updateCategoryRooms(fields)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryRooms);
