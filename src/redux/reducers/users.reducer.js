import { GET_DATA, GET_SEARCH_TEXT, LOADER } from "../actions/users.actions";

const initialState = {
  users: [],
  filteredUsers: [],
  loading: false,
  inputText: "",
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
    default:
      return state;
  }
};
