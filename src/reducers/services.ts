import * as types from '../actionTypes/services';

const servicesReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_SERVICES:
      return [...action.payload];

    default:
      return state
  }
};

export default servicesReducer;

