import * as types from '../actionTypes/categoryRooms';

const categoryRoomsReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_CATEGORYROOMS:
      return [...action.payload];

    default:
      return state
  }
};

export default categoryRoomsReducer;

