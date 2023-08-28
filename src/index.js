<<<<<<< HEAD
import store from './redux/redux_store';
=======
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
import React from 'react';
import store from './redux/redux_store';
// import store from './redux/store';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

<<<<<<< HEAD
root.render(
   <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
);

reportWebVitals();
=======
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
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
