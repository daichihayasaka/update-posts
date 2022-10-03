import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { PostReducer } from './features/post/post-reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  combineReducers({
    post: PostReducer,
  }),
  applyMiddleware(
    thunk
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
