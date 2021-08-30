import firebase from 'firebase';
import * as types from '../actionTypes/app';
import * as userTypes from '../actionTypes/user';

//Default firebase configurations
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
    dispatch({ type: types.SHOW_LOADER }); //Show loader while request is pending

    const firebaseApp = firebase.initializeApp(firebaseConfig); //Initialise firebase app
    //const db = firebaseApp.firestore();
    const auth = firebaseApp.auth(); //Authorize to Firebase app

    //Register new user with email and password
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        //Show alert success messag
        dispatch({
          type: types.SHOW_ALERT,
          payload: 'Your account has been created. You can log in.',
        });

        //Add user data to redux store
        dispatch({
          type: userTypes.SET_USER,
          payload: user,
        });
      })
      .catch((error) => {
        dispatch({ type: types.SHOW_ERROR, payload: error.message }); //Show error alert message
      })
      .finally(() => {
        dispatch({ type: types.HIDE_LOADER }); //Hide loader after finish request
      });
  };
}

export function authorizeUser(email: string, password: string) {
  return async function (dispatch: any) {
    dispatch({ type: types.SHOW_LOADER });

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    //const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: userTypes.SET_USER,
          payload: user,
        });
      })
      .catch((error) => {
        dispatch({ type: types.SHOW_ERROR, payload: error.message });
      })
      .finally(() => {
        dispatch({ type: types.HIDE_LOADER });
      });
  };
}

export function forgotPassword(email: string) {
  return async function (dispatch: any) {
    dispatch({ type: types.SHOW_LOADER });

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    //const db = firebaseApp.firestore();
    const auth = firebaseApp.auth();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({
          type: types.SHOW_ALERT,
          payload: 'Please check your email. We sent reset link',
        });
      })
      .catch((error) => {
        dispatch({ type: types.SHOW_ERROR, payload: error.message });
      })
      .finally(() => {
        dispatch({ type: types.HIDE_LOADER });
      });
  };
}
