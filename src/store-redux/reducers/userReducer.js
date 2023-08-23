import * as ActionTypes from "../ActionTypes";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USERS_LOADING:
      return {
        ...state,
        loading: true,
        data: [],
        error: null,
      };
    case ActionTypes.USERS_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        data: action.payload,
      };

    case ActionTypes.USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
