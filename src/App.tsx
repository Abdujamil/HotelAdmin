import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { HashRouter, Switch, Route } from 'react-router-dom';
import ErrorModal from './components/ErrorModal';
import Loader from './components/Loader';
import AlertSuccess from './components/AlertSuccess';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Rooms from './Components/Home/rooms';
import staff from './Components/Home/staff';
import Accommodation from './Components/Home/accommodation';
import categoryRooms from './Components/Home/categoryRooms';


function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Loader />
          <AlertSuccess />
          <ErrorModal />
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/rooms" component={Rooms} />
            <Route path="/staff" component={staff} />
            <Route path="/accommodation" component={Accommodation} />
            <Route path="/categoryRooms" component={categoryRooms} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
