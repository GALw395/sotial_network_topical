import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 15 },
  { id: 2, message: 'My first post?', likesCount: 20 },
  { id: 3, message: 'Bla bla bla', likesCount: 5 }
]

let dialogs = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Lera' },
  { id: 3, name: 'Tania' },
  { id: 4, name: 'Marina' },
  { id: 5, name: 'Nixie' }
]

let messages = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'Bla bla' },
  { id: 3, message: 'Hi Nixie.' }
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
