import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import MaterialTable from 'material-table';
import {Container, CssBaseline, Grid, Paper} from "@material-ui/core";
import MenuBar from './menuBar';
import {getServices, isServicesFetched} from '../../selectors';
import {fetchServices, addServices, deleteServices, updateServices} from '../../actions/services';
import useStyles from '../styles';

const Services = (props) => {
  const classes = useStyles();

  const {services, isServicesFetched, fetchServicesAction, addServicesAction, deleteServicesAction, updateServicesAction} = props;

  const validateFields = (data) => {
    if (Object.keys(data).length === 0) {
      alert('Please add info');
      return false;
    }

    /* if (typeof data.services === 'undefined' || data.services === '') {
      alert('Please add services');
      return false;
    }

    if (typeof data.cost === 'undefined' || data.cost === '') {
      alert('Please add cost');
      return false;
    }

    if (typeof data.description === 'undefined' || data.description === '') {
      alert('Please add description');
      return false;
    } */

    return true;
  }

  const columns = [
    {title: 'Service', field: 'service', type: 'text'},
    {title: 'Cost', field: 'cost', type: 'currency'},
    {title: 'Description', field: 'description', type: 'text'},
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
                {isServicesFetched && <MaterialTable
                  title="Services"
                  options={options}
                  columns={columns}
                  data={services}
                  editable={{
                    onRowAdd: newData =>
                      new Promise((resolve, reject) => {
                        if (validateFields(newData)) {
                          Promise.resolve(addServicesAction(newData)).then(() => {
                            fetchServicesAction();
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
                          Promise.resolve(updateServicesAction(newData)).then(() => {
                            fetchServicesAction();
                          }).then(() => {
                            resolve();
                          });
                        } else {
                          reject();
                        }
                      }),
                    onRowDelete: oldData =>
                      new Promise((resolve, reject) => {
                        Promise.resolve(deleteServicesAction(oldData.id)).then(() => {
                          fetchServicesAction();
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
    services: getServices(state),
    isServicesFetched: isServicesFetched(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServicesAction: () => dispatch(fetchServices()),
    addServicesAction: (fields) => dispatch(addServices(fields)),
    deleteServicesAction: (id) => dispatch(deleteServices(id)),
    updateServicesAction: (fields) => dispatch(updateServices(fields)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);
