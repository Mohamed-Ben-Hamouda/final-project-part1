import { ADD_SOIN, GET_SOIN, SOIN_ERROR } from "../actions/types";

const initialState = {
  soins: [],
  saved: null,

};

const SoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOIN:
      return {
        ...state,
        soin: action.payload,
      };

    case ADD_SOIN:
      return {
        ...state,
        soin: [action.payload, ...state.soin],
      };
    case SOIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SoinReducer;
