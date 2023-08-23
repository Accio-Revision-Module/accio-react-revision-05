import axios from "axios";
import { error, loading, success } from "../slices/userSlice";

export const getUsersAction = () => async (dispatch) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  dispatch(loading());
  try {
    const res = await axios.get(url);
    const usersList = res.data;
    dispatch(success(usersList));
  } catch (e) {
    dispatch(error(e?.message ?? e.toString()));
  }
};
