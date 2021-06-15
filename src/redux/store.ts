import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import { createBrowserHistory } from 'history';
// import { routerMiddleware } from 'connected-react-router';

import rootReducer from './reducers';
// import rootSaga from './root-saga';

// export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware, routerMiddleware(history)];
const middlewares: any[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(
  // rootReducer(history),
  rootReducer,
  applyMiddleware(...middlewares)
);

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
