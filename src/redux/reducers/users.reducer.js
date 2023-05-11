import { GET_DATA, LOADER, SET_PAGE_NUMBER } from "../actions/users.actions";

const initialState = {
  users: [],
  loading: false,
  inputText: "",
  pageNumber: 0,
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
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
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: payload };
    default:
      return state;
  }
};
