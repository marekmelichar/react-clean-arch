import { combineReducers } from "redux";
import { getNotesReducer } from "./getNotes";

export const rootReducer = combineReducers({
  get_notes: getNotesReducer
});