import React from 'react';
import store from './redux/redux_store';
// import store from './redux/store';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)} />
         </BrowserRouter>
      </React.StrictMode>
   );

   reportWebVitals();
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// Зачем так делать - не пон
// store.subscribe(() => {
//    let state = store.getState();
//    renderEntireTree(state);
// });