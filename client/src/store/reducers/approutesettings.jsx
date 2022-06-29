import {
  FETCH,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  CREATE,
  UPDATE,
  DELETE,
  
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

export default (state = { isLoading: true, approutesettings: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        approutesettings: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, approutesettings: action.payload };
    case FETCH:
      return { ...state, approutesetting: action.payload };
   
    case UPDATE:
  
      return {
        ...state,
        approutesetting: state.approutesettings.map((approutesetting) =>
          approutesetting._id === action.payload._id ? action.payload : approutesetting
        ),
      };
    case DELETE:
      return {
        ...state,
        approutesetting: state.approutesettings.filter((approutesetting) => approutesetting._id !== action.payload),
      };

    case CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
