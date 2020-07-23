import {
	CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE
} from "../../actions";

const initialState = {
	loading: false,
	payload: [],
}

export const createNoteReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_NOTE_REQUEST:
			return {
				...state,
				loading: true,
			}

    case CREATE_NOTE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      }

    case CREATE_NOTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
	}
};
