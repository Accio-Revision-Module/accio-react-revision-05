# ReactJS Revision - 05

## Table of Contents

1. [mapStateToProps() and mapDispatchToProps()](#mapStateToProps-and-mapDispatchToProps)
2. [Key Differences Between mapStateToProps() and mapDispatchToProps()](#key-differences-between-mapStateToProps-and-mapDispatchToProps)
3. [Middleware](#middleware)
4. [Redux Thunk](#redux-thunk)
5. [How to use `connect` from React Redux](#how-to-use-connect-from-react-redux)
6. [Redux DevTools](#redux-devtools)

---

## mapStateToProps() and mapDispatchToProps()

### Explanation:

- `mapStateToProps()`: Maps the state from the Redux store to the component's props.
- `mapDispatchToProps()`: Allows dispatching actions directly from React components.

### Example:

A simple counter application.

#### Code Snippet:

```javascript
const mapStateToProps = (state) => {
  return { count: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};
```

---

## Key Differences Between mapStateToProps() and mapDispatchToProps()

### Explanation:

- `mapStateToProps` is for **reading** from the Redux store.
- `mapDispatchToProps` is for **writing** to the Redux store.

### Example:

`mapStateToProps` gives access to the current count, while `mapDispatchToProps` provides methods to change that count.

---

## Middleware

### Explanation:

Middleware in Redux can change actions or outcomes before they reach the reducer.

### Example:

A logging middleware.

#### Code Snippet:

```javascript
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};
```

---

## Redux Thunk

### Explanation:

Allows action creators to return a function instead of an action object.

### Example:

Fetching user data from an API.

#### Code Snippet:

```javascript
function fetchUserData() {
  return (dispatch) => {
    dispatch({ type: "FETCH_USER_START" });
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_USER_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "FETCH_USER_ERROR", payload: error }));
  };
}
```

---

## How to use `connect` from React Redux

### Explanation:

`connect` is a function that connects a React component to the Redux store.

### Example:

Connecting the counter component to the store.

#### Code Snippet:

```javascript
import { connect } from "react-redux";
export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
```

---

## Redux DevTools

### Explanation:

A tool for time-travel debugging, action monitoring, and state diffing.

### Example:

How to navigate through dispatched actions and explore the state tree.

#### Code Snippet:

```javascript
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
```

---
