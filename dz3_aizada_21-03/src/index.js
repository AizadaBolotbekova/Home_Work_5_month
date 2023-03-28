import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Profiler } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Profiler store={store}>
    <App />
  </Profiler>
);
