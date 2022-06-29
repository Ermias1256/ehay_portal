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
import * as api from "../api";

// Action Creators
export const getAppRouteSetting = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchAppRouteSetting(id);

    dispatch({ type: FETCH, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAppRouteSettings = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchAppRouteSettings(page);
    
    dispatch({ type: FETCH_ALL, payload: data });
    
    dispatch({ type: END_LOADING });


} catch (error) {
    console.log(error.message);
  }
};

export const getAppRouteSettingsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchAppRouteSettingsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
    
  } catch (error) {
    console.log(error);
  }
};

export const createAppRouteSetting = (approutesetting) => async (dispatch) => {
  try {
    
    dispatch({ type: START_LOADING });
    const { data } = await api.createAppRouteSetting(approutesetting);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateAppRouteSetting = (id, approutesetting) => async (dispatch) => {
  try {
    const { data } = await api.updateAppRouteSetting(id, approutesetting);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAppRouteSetting = (id) => async (dispatch) => {
  try {
    await api.deleteAppRouteSetting(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};




