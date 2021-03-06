import {
	NOTES_LOAD_REQUEST,
	NOTES_LOAD_SUCCESS,
	NOTES_LOAD_FAILURE,
} from "../../actions";

const initialState = {
	loading: false,
	payload: [],
}

export const getNotesReducer = (state = initialState, action) => {
	switch (action.type) {
		case NOTES_LOAD_REQUEST:
			return {
				...state,
				loading: true,
      }
      
    case NOTES_LOAD_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      }

    case NOTES_LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
	}
};
