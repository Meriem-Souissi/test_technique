import { GET_CARD_FAIL, GET_CARD_SUCCESS } from "./types";

import axios from "axios";

//Get cards
export const getCards = () => (dispatch) => {
  axios
    .get("https://api.mocki.io/v1/af37df01")
    .then((res) =>
      dispatch({
        type: GET_CARD_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_CARD_FAIL,
        payload: err.response.data.errors,
      })
    );
};
