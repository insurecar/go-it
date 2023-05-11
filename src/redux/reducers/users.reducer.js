import {
  GET_DATA,
  LOADER,
  SET_PAGE_NUMBER,
  GET_INPUT_TEXT,
  FILTERED_DATA,
} from "../actions/users.actions";

const initialState = {
  users: [],
  loading: false,
  inputText: "",
  pageNumber: 0,
  pageFilteredName: 0,
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        users: payload,
      };
    case FILTERED_DATA:
      return {
        ...state,
        users: payload,
      };

    case LOADER: {
      return {
        ...state,
        loading: payload,
      };
    }
    case GET_INPUT_TEXT:
      return {
        ...state,
        inputText: payload,
      };

    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: payload };
    default:
      return state;
  }
};
