import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobayStyle } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobayStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
