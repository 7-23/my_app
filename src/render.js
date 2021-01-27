import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state'
import { BrowserRouter, Route } from 'react-router-dom';
import {updateNewPostText} from './redux/state'
import {updateNewMessageText} from './redux/state'
import {addMessage} from './redux/state'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
      <App 
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        />
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root'));  
}
