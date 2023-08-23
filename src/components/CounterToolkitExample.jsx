import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store-toolkit/slices/counterSlice";

function CounterToolkitExample() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const incrementFn = () => {
    dispatch(increment());
  };

  const decrementFn = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter Toolkit Example</h1>
      <p>
        <div>
          <button onClick={decrementFn}>-1</button>
        </div>
        Counter: {counter}
        <div>
          <button onClick={incrementFn}>+1</button>
        </div>
      </p>
    </div>
  );
}

export default CounterToolkitExample;
