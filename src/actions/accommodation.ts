import axios from 'axios';
import * as types from '../actionTypes/app';
import * as accommodationTypes from '../actionTypes/accommodation';
import { APP_DB_URL } from '../utils';

export function fetchAccommodation() {
  return async function (dispatch: any) {
    dispatch({ type: types.SHOW_LOADER }); //Show loader while request is pending

    try {
      const res = await axios.get(`${APP_DB_URL}/accommodation.json`); //fetch accomodations from Firebase

      //Destructure result
      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });

      //Set result to redux store
      dispatch({
        type: accommodationTypes.SET_ACCOMODATION,
        payload,
      });
    } catch (error) {
      dispatch({ type: types.SHOW_ERROR, payload: error.message }); //Show error alert message
    } finally {
      dispatch({ type: types.HIDE_LOADER }); //Hide loader after finish request
    }
  };
}

export function addAccommodation(fields: Object) {
  return async function (dispatch: any) {
    dispatch({ type: types.SHOW_LOADER }); //Show loader while request is pending

    try {
      await axios.post(`${APP_DB_URL}/accommodation.json`, fields); //Add new accomodation

      //Show alert success message
      dispatch({
        type: types.SHOW_ALERT,
        payload: 'Accommodation added succesfully',
      });
    } catch (error) {
      dispatch({ type: types.SHOW_ERROR, payload: error.error }); //Show error alert message
    } finally {
      dispatch({ type: types.HIDE_LOADER }); //Hide loader after finish request
    }
  };
}

export function deleteAccommodation(id: string) {
  return async function (dispatch: any) {
    dispatch({ type: types.SHOW_LOADER }); //Show loader while request is pending

    try {
      await axios.delete(`${APP_DB_URL}/accommodation/${id}.json`); //Delete accomodation with id

      //Show alert success message
      dispatch({
        type: types.SHOW_ALERT,
        payload: 'Accommodation deleted succesfully',
      });
    } catch (error) {
      dispatch({ type: types.SHOW_ERROR, payload: error.error }); //Show error alert message
    } finally {
      dispatch({ type: types.HIDE_LOADER }); //Hide loader after finish request
    }
  };
}

export function updateAccommodation(fields: Object) {
  return async function (dispatch: any) {
    dispatch({ type: types.SHOW_LOADER }); //Show loader while request is pending

    try {
      await axios.put(`${APP_DB_URL}/accommodation/${fields.id}.json`, fields); //Update accomodation with id

      //Show alert success message
      dispatch({
        type: types.SHOW_ALERT,
        payload: 'Accommodation updated succesfully',
      });
    } catch (error) {
      dispatch({ type: types.SHOW_ERROR, payload: error.error }); //Show error alert message
    } finally {
      dispatch({ type: types.HIDE_LOADER }); //Hide loader after finish request
    }
  };
}
