import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';
import { BrowserRouter, Route, Routes } from "react-router-dom";

let renderEntireTree = (state) => {
   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} addPost={addPost} />
         </BrowserRouter>
      </React.StrictMode>
   );

   reportWebVitals();
};

export default renderEntireTree;