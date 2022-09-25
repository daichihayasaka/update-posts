import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { PostReducer } from './features/post/post-reducer';

const store = createStore(
  combineReducers({
    PostReducer,
  })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
