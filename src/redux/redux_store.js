<<<<<<< HEAD
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
=======
import { combineReducers, legacy_createStore as createStore } from "redux";
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import navbar_reducer from "./navbar_reducer";
import me_reducer from "./me_reducer";
<<<<<<< HEAD
import users_reducer from "./users_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import app_reducer from "./app_reducer";


let reducers = combineReducers({
   me: me_reducer,
   dialogsPage: dialogs_reducer,
   profilePage: profile_reducer,
   navBarData: navbar_reducer,
   usersPage: users_reducer,
   auth: auth_reducer,
   form: formReducer,
   app: app_reducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
=======

let reducers = combineReducers({
   me: me_reducer,
   profilePage: profile_reducer,
   dialogsPage: dialogs_reducer,
   navBarData: navbar_reducer,
});


let store = createStore(reducers);
window.store = store;

export default store;
>>>>>>> 5c0e6869ff15682da91c38fa3111f9977f394917
