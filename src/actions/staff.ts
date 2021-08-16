import axios from 'axios';
import * as types from '../actionTypes/app';
import * as staffTypes from '../actionTypes/staff';
import {APP_DB_URL} from '../utils';

export function fetchStaff() {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      const res = await axios.get(`${APP_DB_URL}/staff.json`);

      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });

      dispatch({
        type: staffTypes.SET_STAFF,
        payload,
      });
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.message});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function addStaff(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.post(`${APP_DB_URL}/staff.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Staff added succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function deleteStaff(id: string) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.delete(`${APP_DB_URL}/staff/${id}.json`);
      dispatch({type: types.SHOW_ALERT, payload: 'Staff deleted succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function updateStaff(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.put(`${APP_DB_URL}/staff/${fields.id}.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Staff updated succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}
