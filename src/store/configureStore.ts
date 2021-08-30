import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Create and export redux store with devtools extension
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
