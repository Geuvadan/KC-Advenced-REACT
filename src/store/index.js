import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router';

import * as reducers from './reducers';

const createRootReducer = ({ history }) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

const configMiddleware = (config) => [ReduxThunk.withExtraArgument(config)];

const composeEnhancers = composeWithDevTools;

export function configureStore(config) {
  return function (preloadState) {
    const reducer = createRootReducer(config);
    const middlewares = configMiddleware(config);
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(reducer, preloadState, enhancers);
    return store;
  };
}
