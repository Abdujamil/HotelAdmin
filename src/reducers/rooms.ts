import * as types from '../actionTypes/rooms';

const roomsReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_ROOMS:
      return [...action.payload]; //Add all rooms to redux store

    default:
      return state;
  }
};

export default roomsReducer;
