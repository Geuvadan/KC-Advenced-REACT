import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Adset from '../Adset/Adset';
import Details from '../Details/Details';
import CreateAd from '../CreateAd/CreateAd';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/adset" component={Adset} />
          <Route path="/details/:id" component={Details} />
          <Route path="/createad" component={CreateAd} />

          <Redirect to="/adset" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
