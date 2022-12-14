import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, addMessage, updateNewPostText, updateNewMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';



export let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText} />
      </React.StrictMode>
    </BrowserRouter>
  );
}




