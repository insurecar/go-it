import axios from "axios";

export const GET_DATA = "USERS/GET_DATA";
export const FILTERED_DATA = "USERS/FILTERED_DATA";
export const GET_SEARCH_TEXT = "USERS/GET_SEARCH_TEXT";
export const LOADER = "USERS/LOADER";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";

export const getData = () => (dispatch) =>
  axios(
    "https://api.github.com/search/repositories?q=react+in:name&sort=stars&per_page=20"
  ).then((data) => {
    if (data?.status) {
      dispatch(setLoader(false));
    }
    dispatch({
      type: GET_DATA,
      payload: data.data,
    });
  });
export const getSearchText = (text) => ({
  type: GET_SEARCH_TEXT,
  payload: text,
});

export const setLoader = (payload) => ({
  type: LOADER,
  payload,
});

export const setPageNumber = (number) => ({
  type: SET_PAGE_NUMBER,
  payload: number,
});
