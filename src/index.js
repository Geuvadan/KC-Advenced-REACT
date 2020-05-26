import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import Root from './components/Root';
import './index.css';
import * as AdsApi from './services/api';
import { configureStore } from './store';

const history = createBrowserHistory();
const store = configureStore({ AdsApi, history })();

ReactDOM.render(<Root store={store} history={history} />, document.getElementById('root'));
