import { authActions } from "../actions/authActions";

const initState = {
  userDetails: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    case "LOGOUT":
      return initState;
    default:
      return state;
  }
};

export default reducer;
