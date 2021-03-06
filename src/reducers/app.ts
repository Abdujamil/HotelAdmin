import * as types from '../actionTypes/app';

//State on first loading app
const initialState: {
  loadersCount: number;
  error: boolean;
  alert: boolean;
} = {
  loadersCount: 0,
  error: false,
  alert: false,
};

const appReducer = (state = initialState, action: any): Object => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return { ...state, loadersCount: state.loadersCount + 1 };

    case types.HIDE_LOADER:
      const loaderCount = state.loadersCount > 0 ? state.loadersCount - 1 : 0;
      return { ...state, loadersCount: loaderCount };

    case types.SHOW_ERROR:
      return { ...state, error: true, errorMessage: action.payload };

    case types.HIDE_ERROR:
      return { ...state, error: false };

    case types.SHOW_ALERT:
      return { ...state, alert: true, successMessage: action.payload };

    case types.HIDE_ALERT:
      return { ...state, alert: false };

    default:
      return state;
  }
};

export default appReducer;
