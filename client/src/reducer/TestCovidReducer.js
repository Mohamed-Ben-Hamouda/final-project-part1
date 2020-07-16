import {
  ADD_TESTCOVID,
  GET_TESTCOVID,
  TESTCOVID_ERROR,
} from "../actions/types";

const initialState = {
  testCovid: [],
};

const TestCovidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TESTCOVID:
      return {
        ...state,
        testCovid: action.payload,
      };

    case ADD_TESTCOVID:
      return {
        ...state,
        testCovid: [action.payload, ...state.testCovid],
      };
    case TESTCOVID_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TestCovidReducer;
