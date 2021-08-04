import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Register from './Components/Register';

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
