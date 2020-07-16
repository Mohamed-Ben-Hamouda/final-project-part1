import { ADD_SUIVIE, GET_SUIVIE, SUIVIE_ERROR } from "../actions/types";

const initialState = {
  suivie: [],
};

const SuivieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUIVIE:
      return {
        ...state,
        suivie: action.payload,
      };

    case ADD_SUIVIE:
      return {
        ...state,
        suivie: [action.payload, ...state.suivie],
      };
    case SUIVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SuivieReducer;
