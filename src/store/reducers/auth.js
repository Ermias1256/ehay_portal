import {
  AUTH,
  LOGOUT,
  FETCH_ALL_USERS,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

const authReducer = (
  state = { authData: null, users: [], isLoading: true },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case FETCH_ALL_USERS:
      return {
        ...state,
        users: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    default:
      return state;
  }
};

export default authReducer;
