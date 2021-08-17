import * as types from '../actionTypes/rooms';

const roomsReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_ROOMS:
      return [...action.payload];

    default:
      return state
  }
};

export default roomsReducer;

