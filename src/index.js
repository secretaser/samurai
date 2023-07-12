import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
         </BrowserRouter>
      </React.StrictMode>
   );

   reportWebVitals();
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);