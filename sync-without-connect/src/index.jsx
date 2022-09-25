import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from 'redux';
import { PostReducer } from './features/post/post-reducer';

export const store = createStore(PostReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
