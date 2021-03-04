import axios from "axios";
import { FETCH_USER, FETCH_MYLIST } from "./types";

export const fetchUser = () => async (dipatch) => {
  const response = await axios.get("/api/auth/current_user");
  if (response) dipatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch) => {
  const response = await axios.post("/api/stripe", token);
  if (response) dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchMylist = () => async (dispatch) => {
  const response = await axios("/api/user/mylist");
  dispatch({ type: FETCH_MYLIST, payload: response.data });
};
export const checkMylist = () => async (dispatch) => {
  const response = await axios("/api/user/mylist");
  //dispatch({ type: CHECK_MYLIST, payload: response.data });
};

export const setMylist = (values, history) => async (dispatch) => {
  const response = await axios.post("/api/user/mylist", values);
  //history.push("/mylist");
  //dispatch({ type: CHECK_MYLIST, payload: response.data });
};

export const checkFavorite = () => async (dispatch) => {
  const response = await axios("/api/user/favorite");
  //dispatch({ type: CHECK_FAVORITE, payload: response.data });
};

export const setFavorite = (values, history) => async (dispatch) => {
  const response = await axios.post("/api/user/favorite", values);
  //history.push("/mylist");
  //dispatch({ type: CHECK_FAVORITE, payload: response.data });
};
