import { combineReducers } from 'redux';
import appReducer from './app';
import userReducer from './user';
import roomsReducer from './rooms';

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  rooms: roomsReducer,
});
