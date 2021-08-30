import * as types from '../actionTypes/staff';

const staffReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_STAFF:
      return [...action.payload]; //Add all staff to redux store

    default:
      return state;
  }
};

export default staffReducer;
