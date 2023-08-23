import "./App.css";
import { Provider } from "react-redux";
// import CounterReduxExample from "./components/CounterReduxExample";
import store from "./store-toolkit";
// import FetchUsersRedux from "./components/FetchUsersRedux";
import FetchUsersToolKit from "./components/FetchUsersToolkit";
// import CounterToolkitExample from "./components/CounterToolkitExample";
// import CounterClass from "./components/CounterClass";

function App() {
  return (
    <Provider store={store}>
      {/* <CounterReduxExample /> */}
      {/* <CounterToolkitExample /> */}
      {/* <CounterClass /> */}
      {/* <FetchUsersRedux /> */}
      <FetchUsersToolKit />
    </Provider>
  );
}

export default App;
