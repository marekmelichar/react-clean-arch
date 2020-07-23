import { NotesGateway } from '../../../core/infrastructure/api/notes'
import { DeleteNote } from '../../../core/application/useCase/notes/deleteNote'
import { getNotes } from '../getNotes'

import {
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE
} from "../types";

export const deleteNote = id => {

  return async (dispatch) => {
    
    dispatch({ type: DELETE_NOTE_REQUEST })

    try {
      const notesGateway = new NotesGateway()
      const noteService = new DeleteNote(notesGateway)
      const noteResult = await noteService.execute(id)
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: noteResult })
      
      if(noteResult) {
        dispatch(getNotes())
      }
    } catch (error) {
      dispatch({ type: DELETE_NOTE_FAILURE, error })
    }
  }
};


