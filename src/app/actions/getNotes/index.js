// import { Dispatch } from "redux";
// import { INote } from '../../../core/domain/entity/note'
// import { NoteServiceImplementation } from '../../../core/application/useCase/notes/notes'
// import { NoteRepositoryImplementation } from '../../../core/repository/NoteRepositoryImplementation'

import {
  NOTES_LOAD_REQUEST,
  NOTES_LOAD_SUCCESS,
  NOTES_LOAD_FAILURE
} from "../types";

export const getNotes = () => {
  return async (dispatch) => {
    
    dispatch({ type: NOTES_LOAD_REQUEST })

    try {
      // const noteRepository = new NoteRepositoryImplementation()
      // const noteService = new NoteServiceImplementation(noteRepository)
      // const notes = await noteService.GetNotes()
      dispatch({ type: NOTES_LOAD_SUCCESS, payload: "notes" })
    } catch (error) {
      dispatch({ type: NOTES_LOAD_FAILURE, error })
    }
  }
};