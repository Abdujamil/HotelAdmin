import * as types from '../actionTypes/user';

const userReducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.SET_USER:
      return {...state, ...action.payload};

    default:
      return state
  }
};

export default userReducer;

