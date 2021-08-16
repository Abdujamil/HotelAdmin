import { combineReducers } from 'redux';
import appReducer from './app';
import userReducer from './user';
import roomsReducer from './rooms';
import staffReducer from './staff';
import accommodationReducer from './accomodation';

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  rooms: roomsReducer,
  staff: staffReducer,
  accommodation: accommodationReducer
});
