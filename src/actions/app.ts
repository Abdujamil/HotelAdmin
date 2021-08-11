import * as types from '../actionTypes/app';

export const showLoader = (): Object => {
  return {type: types.SHOW_LOADER}
};

export const hideLoader = (): Object => {
  return {type: types.HIDE_LOADER}
};

export const showError = (): Object => {
  return {type: types.SHOW_ERROR}
};

export const hideError = (): Object => {
  return {type: types.HIDE_ERROR}
};

export const showAlert = (message: any): Object => {
  return {type: types.SHOW_ALERT, payload: message}
};

export const hideAlert = (): Object => {
  return {type: types.HIDE_ALERT}
};
