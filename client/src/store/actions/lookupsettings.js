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
export const getLookupSetting = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchLookupSetting(id);

    dispatch({ type: FETCH, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLookupSettings = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchLookupSettings(page);

    dispatch({ type: FETCH_ALL, payload: data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getLookupSettingsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchLookupSettingsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createLookupSetting = (lookupsetting) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createLookupSetting(lookupsetting);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateLookupSetting = (id, lookupsetting) => async (dispatch) => {
  try {
    const { data } = await api.updateLookupSetting(id, lookupsetting);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteLookupSetting = (id) => async (dispatch) => {
  try {
    await api.deleteLookupSetting(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
