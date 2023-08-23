import axios from "axios";
import * as ActionTypes from "../ActionTypes";

export const getUsersAction = () => async (dispatch) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  dispatch({ type: ActionTypes.USERS_LOADING });
  try {
    const res = await axios.get(url);
    const usersList = res.data;
    dispatch({ type: ActionTypes.USERS_SUCCESS, payload: usersList });
  } catch (e) {
    dispatch({
      type: ActionTypes.USERS_FAILURE,
      payload: e?.message ?? e.toString(),
    });
  }
};
