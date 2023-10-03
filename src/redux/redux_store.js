import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from "redux";
import dialogs_reducer from "./dialogs_reducer.ts";
import profile_reducer from "./profile_reducer.ts";
import navbar_reducer from "./navbar_reducer";
import users_reducer from "./users_reducer";
import auth_reducer from "./auth_reducer.ts";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import app_reducer from "./app_reducer.ts";


let reducers = combineReducers({
   dialogsPage: dialogs_reducer,
   profilePage: profile_reducer,
   navBarData: navbar_reducer,
   usersPage: users_reducer,
   auth: auth_reducer,
   form: formReducer,
   app: app_reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
   applyMiddleware(thunkMiddleWare)
));

window.__store__ = store;

export default store;
