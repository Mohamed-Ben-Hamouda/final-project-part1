import { ADD_SUIVIE, GET_SUIVIE, SUIVIE_ERROR } from "./types";
import axios from "axios";

export const getSuivie = () => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get("/api/suivie", config)
    .then((res) =>
      dispatch({
        type: GET_SUIVIE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: SUIVIE_ERROR,
        payload: err.response.msg,
      })
    );
};

export const addSuivie = (newSuivie) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/suivie", newSuivie, config)
    .then((res) =>
      dispatch({
        type: ADD_SUIVIE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: SUIVIE_ERROR,
        payload: err.response.data.msg,
      })
    );
};
