import { combineReducers } from "redux";

// REDUCERS
import { getNotesReducer } from "./getNotes";

// ACTIONS
import {
  IgetNotesAction
} from "../actions";

// EXPORTS
export interface StoreState {
  get_notes: IgetNotesAction // --> get all notes
}

export const rootReducer = combineReducers({
  get_notes: getNotesReducer
});