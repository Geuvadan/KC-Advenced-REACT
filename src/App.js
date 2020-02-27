import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
  useParams,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Adset from './components/Adset/Adset';
import Details from './components/Details/Details';
import CreateAd from './components/CreateAd/CreateAd';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/adset" component={Adset} />
        <Route path="/details/:id" component={Details} />
        <Route path="/createad" component={CreateAd} />

        <Redirect to="/adset" />
      </Switch>
    </Router>
  );
}

export default App;
