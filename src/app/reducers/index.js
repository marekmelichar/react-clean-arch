import { combineReducers } from "redux";
import { getNotesReducer } from "./getNotes";
import { createNoteReducer } from "./createNote";

export const rootReducer = combineReducers({
  get_notes: getNotesReducer,
  create_note: createNoteReducer
});