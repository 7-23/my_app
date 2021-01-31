import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let redusers = combineReducers ({
    profilePage: profileReducer,
    messagesPage: dialogsReducer
})

let store = createStore(redusers);

export default store;