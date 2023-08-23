import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../store-redux/actions/userActions";

function FetchUsersRedux() {
  const userState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getUsers = async () => {
    dispatch(getUsersAction());
  };

  return (
    <div>
      <h1>Fetch Users Redux</h1>
      <button onClick={getUsers}>Fetch Users</button>
      <h2>Users are:</h2>
      {userState?.error && <p style={{ color: "red" }}>{userState.error}</p>}
      {userState?.loading && <p>Loading...</p>}
      {userState?.data.map((e) => (
        <div key={e.id}>{e.name}</div>
      ))}
    </div>
  );
}

export default FetchUsersRedux;
