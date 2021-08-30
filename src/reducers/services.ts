import * as types from '../actionTypes/services';

const servicesReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_SERVICES:
      return [...action.payload]; //Add all services to redux store

    default:
      return state;
  }
};

export default servicesReducer;
