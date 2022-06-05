import { combineReducers, legacy_createStore } from "redux";
import { dialogsReducer } from "./dialogs_reducer";
import { profileReducer } from "./profile_reducer";
import { sidebarReducer } from "./sidebar_reducer";
import { usersReducer } from "./users_reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sideBar: sidebarReducer,
});

export const store = legacy_createStore(reducers);
