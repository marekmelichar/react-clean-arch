import { ActionTypes, IgetNotesAction } from "../../actions";

export const getNotesReducer = (state = {}, action: IgetNotesAction) => {
  const initialState = {
    loading: false,
    items: [],
  }

  switch (action.type) {
    case ActionTypes.NOTES_LOAD_REQUEST:
        return {
            ...state,
            loading: true,
        }

    case ActionTypes.NOTES_LOAD_FAILURE:
        return {
            ...state,
            loading: false,
        }

    case ActionTypes.NOTES_LOAD_SUCCESS:
        return {
            ...state,
            items: action.payload,
            loading: false,
        }

    default:
        return state
}
};
