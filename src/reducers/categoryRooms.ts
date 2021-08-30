import * as types from '../actionTypes/categoryRooms';

const categoryRoomsReducer = (state = [], action: any) => {
  switch (action.type) {
    case types.SET_CATEGORYROOMS:
      return [...action.payload]; //Add all categories to redux store

    default:
      return state;
  }
};

export default categoryRoomsReducer;
