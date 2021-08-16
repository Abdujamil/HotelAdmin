import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import {Container, CssBaseline, Grid, Paper} from "@material-ui/core";
import MenuBar from './menuBar';
import {getStaff, isStaffFetched} from '../../selectors';
import {fetchStaff, addStaff, deleteStaff, updateStaff} from '../../actions/staff';
import useStyles from '../styles';

const Staff = (props) => {
  const classes = useStyles();

  const {
    staff,
    isStaffFetched,
    fetchStaffAction,
    addStaffAction,
    deleteStaffAction,
    updateStaffAction
  } = props;

  useEffect(() => {
    fetchStaffAction();
  }, []);

  const validateFields = (data) => {
    if (Object.keys(data).length === 0) {
      alert('Please add info');
      return false;
    }

    if (typeof data.name === 'undefined' || data.name === '') {
      alert('Please add name');
      return false;
    }

    if (typeof data.email === 'undefined' || data.email === '') {
      alert('Please add email');
      return false;
    }

    if (typeof data.role === 'undefined' || data.role === '') {
      alert('Please add role');
      return false;
    }

    return true;
  }

  const columns = [
    {title: 'Name', field: 'name'},
    {title: 'Email', field: 'email'},
    {title: 'Birthday', field: 'birthday', type: 'date'},
    {title: 'Role', field: 'role'},
    {title: 'Salary', field: 'salary', type: 'currency'},
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
                {isStaffFetched && <MaterialTable
                  title="Staff"
                  options={options}
                  columns={columns}
                  data={staff}
                  editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        if (validateFields(newData)) {
                          Promise.resolve(addStaffAction(newData)).then(() => {
                            fetchStaffAction();
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
                          Promise.resolve(updateStaffAction(newData)).then(() => {
                            fetchStaffAction();
                          }).then(() => {
                            resolve();
                          });
                        } else {
                          reject();
                        }
                      }),
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        Promise.resolve(deleteStaffAction(oldData.id)).then(() => {
                          fetchStaffAction();
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
    staff: getStaff(state),
    isStaffFetched: isStaffFetched(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStaffAction: () => dispatch(fetchStaff()),
    addStaffAction: (fields) => dispatch(addStaff(fields)),
    deleteStaffAction: (id) => dispatch(deleteStaff(id)),
    updateStaffAction: (fields) => dispatch(updateStaff(fields)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
