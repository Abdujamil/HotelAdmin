import firebase from 'firebase';

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

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };

export default db;
