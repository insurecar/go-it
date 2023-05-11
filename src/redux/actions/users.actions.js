import axios from "axios";

export const GET_DATA = "USERS/GET_DATA";
export const GET_FILTERED_DATA = "GET_FILTERED_DATA";
export const FILTERED_DATA = "USERS/FILTERED_DATA";
export const LOADER = "USERS/LOADER";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const GET_INPUT_TEXT = " GET_INPUT_TEXT";

export const getData = (number) => (dispatch) => {
  if (number === 21) {
    number = 20;
  }
  axios(
    `https://api.github.com/search/repositories?q=react+in:name&sort=stars&per_page=${number}`
  ).then((data) => {
    if (data?.status) {
      dispatch(setLoader(false));
    }
    dispatch({
      type: GET_DATA,
      payload: data.data,
    });
  });
};

export const getFilteredData = (text) => (dispatch) => {
  axios(
    `https://api.github.com/search/repositories?q=${text}+in:name&sort=stars&per_page=6 `
  ).then((data) => {
    if (data?.status) {
      dispatch(setLoader(false));
    }
    dispatch({
      type: FILTERED_DATA,
      payload: data.data,
    });
  });
};

export const setLoader = (payload) => ({
  type: LOADER,
  payload,
});

export const setPageNumber = (number) => ({
  type: SET_PAGE_NUMBER,
  payload: number,
});

export const getInputText = (text) => ({ type: GET_INPUT_TEXT, payload: text });
