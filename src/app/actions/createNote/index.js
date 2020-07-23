import { NotesGateway } from '../../../core/infrastructure/api/notes'
import { CreateNote } from '../../../core/application/useCase/notes/createNote'
import { getNotes } from '../getNotes'

import {
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE
} from "../types";

export const createNote = note => {

  return async (dispatch) => {
    
    dispatch({ type: CREATE_NOTE_REQUEST })

    try {
      const notesGateway = new NotesGateway()
      const noteService = new CreateNote(notesGateway)
      const noteResult = await noteService.execute(note)
      dispatch({ type: CREATE_NOTE_SUCCESS, payload: noteResult })
      
      if(noteResult) {
        dispatch(getNotes())
      }
    } catch (error) {
      dispatch({ type: CREATE_NOTE_FAILURE, error })
    }
  }
};


