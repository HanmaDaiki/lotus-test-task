import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({ usersReducer });

const store = createStore(rootReducer, composeWithDevTools());

export {store};
