/* eslint-disable react/prop-types */
import { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../store-toolkit/slices/counterSlice";

class CounterClass extends Component {
  render() {
    return (
      <div>
        <h1>Counter Class Example</h1>
        <p>
          <div>
            <button onClick={this.props.decrementFn}>-1</button>
          </div>
          Counter: {this.props.count}
          <div>
            <button onClick={this.props.incrementFn}>+1</button>
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.counter.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementFn: () => dispatch(increment()),
    decrementFn: () => dispatch(decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
