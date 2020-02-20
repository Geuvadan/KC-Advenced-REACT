import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Adset from './components/Adset/Adset';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/adset" component={Adset} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
