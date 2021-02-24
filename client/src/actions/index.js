import axios from "axios";
import { FETCH_USER, FETCH_LIST } from "./types";

export const fetchUser = () => async (dipatch) => {
  const response = await axios.get("/api/auth/current_user");
  if (response) dipatch({ type: FETCH_USER, payload: response.data });
};

export const handleToken = (token) => async (dispatch) => {
  const response = await axios.post("/api/stripe", token);
  if (response) dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetchList = (url) => async (dispatch) => {
	const apiKey = '87dfa1c669eea853da609d4968d294be';
	let requestUrl = 'https://api.themoviedb.org/3/' + url + '&api_key=' + apiKey;
  const response = await axios(requestUrl);
  console.log("Url", requestUrl);
  dispatch({ type: FETCH_LIST, payload: response.data.results });
};
