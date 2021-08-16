import axios from 'axios';
import * as types from '../actionTypes/app';
import * as accommodationTypes from '../actionTypes/accommodation';
import {APP_DB_URL} from '../utils';

export function fetchAccommodation() {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      const res = await axios.get(`${APP_DB_URL}/accommodation.json`);

      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });

      dispatch({
        type: accommodationTypes.SET_ACCOMODATION,
        payload,
      });
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.message});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function addAccommodation(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.post(`${APP_DB_URL}/accommodation.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Accommodation added succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function deleteAccommodation(id: string) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.delete(`${APP_DB_URL}/accommodation/${id}.json`);
      dispatch({type: types.SHOW_ALERT, payload: 'Accommodation deleted succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function updateAccommodation(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.put(`${APP_DB_URL}/accommodation/${fields.id}.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Accommodation updated succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}
