import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from "redux"
import dialogs_reducer from "./dialogs_reducer.ts"
import profile_reducer from "./profile_reducer.ts"
import navbar_reducer from "./navbar_reducer.ts"
import users_reducer from "./users_reducer.ts"
import auth_reducer from "./auth_reducer.ts"
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import app_reducer from "./app_reducer.ts"


let rootReducer = combineReducers({
   dialogsPage: dialogs_reducer,
   profilePage: profile_reducer,
   navBarData: navbar_reducer,
   usersPage: users_reducer,
   auth: auth_reducer,
   form: formReducer,
   app: app_reducer,
});

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(
   applyMiddleware(thunkMiddleWare)
))

//@ts-ignore
window.__store__ = store

export default store