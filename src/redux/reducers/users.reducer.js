import {
  GET_DATA,
  GET_SEARCH_TEXT,
  LOADER,
  SET_PAGE_NUMBER,
} from "../actions/users.actions";

const initialState = {
  users: [],
  filteredUsers: [],
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

    case GET_SEARCH_TEXT:
      console.log("reducer", state);
      return {
        ...state,
        inputText: payload,
        filteredUsers: state.users?.items?.filter((item) =>
          item.name.toLowerCase().includes(payload.toLowerCase())
        ),
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
