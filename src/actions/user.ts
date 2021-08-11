import firebase from 'firebase';
import * as types from '../actionTypes/app';
import * as userTypes from '../actionTypes/user';

const firebaseConfig = {
  apiKey: 'AIzaSyDZb0ddsn8uEedieCexb-5Z0ZF5K3ICv1k',
  authDomain: 'react-electron-hotel-61f51.firebaseapp.com',
  databaseURL: 'https://react-electron-hotel-61f51-default-rtdb.firebaseio.com',
  projectId: 'react-electron-hotel-61f51',
  storageBucket: 'react-electron-hotel-61f51.appspot.com',
  messagingSenderId: '1029391554029',
  appId: '1:1029391554029:web:32e29618172ae04a18c3e4',
  measurementId: 'G-4ESKJRK1GL',
};

export function registerUser(email: string, password: string) {
  return async function (dispatch: any) {
    dispatch({type: types.SHOW_LOADER});

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    //const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: types.SHOW_ALERT,
          payload: 'Your account has been created. You can log in.',
        });
        dispatch({
          type: userTypes.SET_USER,
          payload: user,
        });
      })
      .catch((error) => {
        dispatch({type: types.SHOW_ERROR, payload: error.message});
      }).finally(() => {
      dispatch({type: types.HIDE_LOADER});
    });

  };
}


