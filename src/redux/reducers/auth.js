import actionTypes from "../action-types/auth";

const initialState = {
  error: false,
};

function authReducer(state = initialState, { payload, type }) {
  switch (type) {
    case actionTypes.AUTH.LOGIN.SUCCESS:
      return {
        ...state,
        error: false,
      };
    case actionTypes.AUTH.LOGIN.FAIL:
      return {
        ...state,
        error: true,
      };
    case actionTypes.AUTH.SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

export default authReducer;
