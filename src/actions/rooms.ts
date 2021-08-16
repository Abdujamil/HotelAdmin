import axios from 'axios';
import * as types from '../actionTypes/app';
import * as roomTypes from '../actionTypes/rooms';
import {APP_DB_URL} from '../utils';

export function fetchRooms() {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      const res = await axios.get(`${APP_DB_URL}/rooms.json`);

      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });

      dispatch({
        type: roomTypes.SET_ROOMS,
        payload,
      });
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.message});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function addRoom(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.post(`${APP_DB_URL}/rooms.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Room added succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function deleteRoom(id: string) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.delete(`${APP_DB_URL}/rooms/${id}.json`);
      dispatch({type: types.SHOW_ALERT, payload: 'Room deleted succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function updateRoom(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.put(`${APP_DB_URL}/rooms/${fields.id}.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Room updated succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}
