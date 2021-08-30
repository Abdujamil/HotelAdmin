import * as types from '../actionTypes/accommodation';

const accommodationReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_ACCOMODATION:
      return [...action.payload]; //Set array of accomodations in redux store

    default:
      return state;
  }
};

export default accommodationReducer;
