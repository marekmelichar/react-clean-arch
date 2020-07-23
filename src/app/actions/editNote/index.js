import { NotesGateway } from '../../../core/infrastructure/api/notes'
import { EditNote } from '../../../core/application/useCase/notes/editNote'
import { getNotes } from '../getNotes'

import {
  EDIT_NOTE_REQUEST,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE
} from "../types";

export const editNote = note => {

  return async (dispatch) => {
    
    dispatch({ type: EDIT_NOTE_REQUEST })

    try {
      const notesGateway = new NotesGateway()
      const noteService = new EditNote(notesGateway)
      const noteResult = await noteService.execute(note)
      dispatch({ type: EDIT_NOTE_SUCCESS, payload: noteResult })
      
      if(noteResult) {
        dispatch(getNotes())
      }
    } catch (error) {
      dispatch({ type: EDIT_NOTE_FAILURE, error })
    }
  }
};


