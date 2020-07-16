import { ADD_TESTCOVID, GET_TESTCOVID, TESTCOVID_ERROR } from "./types";
import axios from "axios";

export const getTestCovid = () => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get("/api/covidTest", config)
    .then((res) =>
      dispatch({
        type: GET_TESTCOVID,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: TESTCOVID_ERROR,
        payload: err.response.msg,
      })
    );
};

export const addTestCovid = (newTestCovid) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/covidTest", newTestCovid, config)
    .then((res) =>
      dispatch({
        type: ADD_TESTCOVID,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: TESTCOVID_ERROR,
        payload: err.response.data.msg,
      })
    );
};
