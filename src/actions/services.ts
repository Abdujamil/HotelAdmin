import axios from 'axios';
import * as types from '../actionTypes/app';
import * as servicesTypes from '../actionTypes/services';
import {APP_DB_URL} from '../utils';

export function fetchServices() {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      const res = await axios.get(`${APP_DB_URL}/services.json`);

      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });

      dispatch({
        type: servicesTypes.SET_SERVICES,
        payload,
      });
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.message});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function addServices(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.post(`${APP_DB_URL}/services.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Service added succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function deleteServices(id: string) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.delete(`${APP_DB_URL}/services/${id}.json`);
      dispatch({type: types.SHOW_ALERT, payload: 'Service deleted succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function updateServices(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.put(`${APP_DB_URL}/services/${fields.id}.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Service updated succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}
