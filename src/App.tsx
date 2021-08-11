import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';
import {HashRouter, Switch, Route} from 'react-router-dom';
import ErrorModal from './components/ErrorModal';
import Loader from './components/Loader';
import AlertSuccess from './components/AlertSuccess';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Loader/>
          <AlertSuccess/>
          <ErrorModal/>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/home" component={Home}/>
            <Route path="/forgotPassword" component={ForgotPassword}/>
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
