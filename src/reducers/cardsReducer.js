import { GET_CARD_SUCCESS, GET_CARD_FAIL } from "../actions/types";

let initState = {
  cards: [],
  error: [],
};

const CardsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_CARD_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        error: [],
      };
    case GET_CARD_FAIL:
      return {
        ...state,
        cards: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CardsReducer;
