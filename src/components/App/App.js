import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from '../Header/Header';
import Login from '../Login';
import Register from '../Register/Register';
import Adset from '../Adset';
import Details from '../Details/Details';
import CreateAd from '../CreateAd/CreateAd';
import { fetchAds, fetchTags } from '../../store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAds());
    dispatch(fetchTags());
  }, [dispatch]);

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
