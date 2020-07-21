// import { Dispatch } from "redux";
// import { INote } from '../../../core/domain/entity/note'
import { GetNotes } from '../../../core/application/useCase/notes/notes'
import { NotesGateway } from '../../../core/infrastructure/api/notes'

import {
  NOTES_LOAD_REQUEST,
  NOTES_LOAD_SUCCESS,
  NOTES_LOAD_FAILURE
} from "../types";

export const getNotes = () => {
  return async (dispatch) => {
    
    dispatch({ type: NOTES_LOAD_REQUEST })

    try {
      const notesGateway = new NotesGateway()
      const noteService = new GetNotes(notesGateway)
      const notes = await noteService.execute()
      dispatch({ type: NOTES_LOAD_SUCCESS, payload: notes })
    } catch (error) {
      dispatch({ type: NOTES_LOAD_FAILURE, error })
    }
  }
};