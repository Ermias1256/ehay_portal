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

export default (state = { isLoading: true, lookupsettings: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };

    case END_LOADING:
      return { ...state, isLoading: false };

    case FETCH_ALL:
      return {
        ...state,
        lookupsettings: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };

    case FETCH_BY_SEARCH:
      return { ...state, lookupsettings: action.payload };

    case FETCH:
      return { ...state, lookupsetting: action.payload };

    case UPDATE:
      return {
        ...state,
        lookupsetting: state.lookupsettings.map((lookupsetting) =>
          lookupsetting._id === action.payload._id
            ? action.payload
            : lookupsetting
        ),
      };

    case DELETE:
      return {
        ...state,
        lookupsetting: state.lookupsettings.filter(
          (lookupsetting) => lookupsetting._id !== action.payload
        ),
      };

    case CREATE:
      return [...state, action.payload];

    default:
      return state;
  }
};
