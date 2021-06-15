import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobayStyle } from './themes/global';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <GlobayStyle />
      <App />
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
