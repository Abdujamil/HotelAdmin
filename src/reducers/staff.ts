import * as types from '../actionTypes/staff';

const staffReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.SET_STAFF:
      return [...action.payload];

    default:
      return state
  }
};

export default staffReducer;

