import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import navbar_reducer from "./navbar_reducer";
import me_reducer from "./me_reducer";
import users_reducer from "./users_reducer";
import auth_reducer from "./auth_reducer";


let reducers = combineReducers({
   me: me_reducer,
   dialogsPage: dialogs_reducer,
   profilePage: profile_reducer,
   navBarData: navbar_reducer,
   usersPage: users_reducer,
   auth: auth_reducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
