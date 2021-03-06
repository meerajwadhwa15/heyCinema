import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import './style/style.scss';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
