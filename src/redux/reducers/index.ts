import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import NavigationReducer from './navigation';
// import { connectRouter } from 'connected-react-router';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  // routing: connectRouter(history),
});

export type AppState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
