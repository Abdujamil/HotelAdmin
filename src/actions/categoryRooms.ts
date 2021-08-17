import axios from 'axios';
import * as types from '../actionTypes/app';
import * as categoryRoomsTypes from '../actionTypes/categoryRooms';
import {APP_DB_URL} from '../utils';

export function fetchCategoryRooms() {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      const res = await axios.get(`${APP_DB_URL}/category-rooms.json`);

      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        };
      });

      dispatch({
        type: categoryRoomsTypes.SET_CATEGORYROOMS,
        payload,
      });
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.message});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function addCategoryRooms(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.post(`${APP_DB_URL}/category-rooms.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Category room added succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function deleteCategoryRooms(id: string) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.delete(`${APP_DB_URL}/category-rooms/${id}.json`);
      dispatch({type: types.SHOW_ALERT, payload: 'Category room deleted succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}

export function updateCategoryRooms(fields: Object) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    try {
      await axios.put(`${APP_DB_URL}/category-rooms/${fields.id}.json`, fields);
      dispatch({type: types.SHOW_ALERT, payload: 'Category room updated succesfully'});
    } catch (error) {
      dispatch({type: types.SHOW_ERROR, payload: error.error});
    } finally {
      dispatch({type: types.HIDE_LOADER});
    }
  };
}
