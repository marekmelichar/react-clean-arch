// import { ActionTypes } from "../types";
// import { Dispatch } from "redux";
// import { INote } from '../../../core/domain/entity/note'
// import { NoteServiceImplementation } from '../../../core/application/useCase/notes/notes'
// import { NoteRepositoryImplementation } from '../../../core/repository/NoteRepositoryImplementation'

// export interface IgetNotesAction {
//   type: ActionTypes.NOTES_LOAD_SUCCESS | ActionTypes.NOTES_LOAD_REQUEST | ActionTypes.NOTES_LOAD_FAILURE;
//   payload: INote[];
// }

// export const getNotes = () => {
//   return async (dispatch: Dispatch) => {
    
//     dispatch({ type: ActionTypes.NOTES_LOAD_REQUEST })

//     try {
//       const noteRepository = new NoteRepositoryImplementation()
//       const noteService = new NoteServiceImplementation(noteRepository)
//       const notes = await noteService.GetNotes()
//       dispatch<IgetNotesAction>({ type: ActionTypes.NOTES_LOAD_SUCCESS, payload: notes })
//     } catch (error) {
//       dispatch({ type: ActionTypes.NOTES_LOAD_FAILURE, error })
//     }
//   }
// };