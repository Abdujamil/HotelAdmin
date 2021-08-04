import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
