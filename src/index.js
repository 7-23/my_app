import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter, Route } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App 
        store={store.getState()}
        dispatch={store.dispatch.bind(store)}
        />
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root'));  
}
rerenderEntireTree(store.getState());

store.subscribe (() => {

  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
