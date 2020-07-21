import { NOTES_LOAD_REQUEST, NOTES_LOAD_FAILURE, NOTES_LOAD_SUCCESS } from "../../actions";

const initialState = {
    loading: false,
    notes: [],
}

export const getNotesReducer = (state = initialState, action) => {
  

  switch (action.type) {
    case NOTES_LOAD_REQUEST:
        return {
            ...state,
            loading: true,
        }

    case NOTES_LOAD_FAILURE:
        return {
            ...state,
            loading: false,
        }

    case NOTES_LOAD_SUCCESS:
        return {
            ...state,
            notes: action.payload,
            loading: false,
        }

    default:
        return state
}
};
