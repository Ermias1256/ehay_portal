import axios from "axios";
// const ENDPOINT_BASE_URL = process.env.REACT_APP_ENDPOINT_URL; // "http://localhost:5000";
const ENDPOINT_BASE_URL = "http://localhost:5000";

const API = axios.create({ baseURL: ENDPOINT_BASE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

// Authentications
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const verifySignUp = (formData) =>
  API.post("/user/verifySignup", formData);
export const signupWelcome = (emailParams) =>
  API.post("/user/signupWelcome", emailParams);

export const fetchUsers = (page) => API.get(`/users?page=${page}`);

// CRUD for app routes settings  -- /approutesettings
export const fetchAppRouteSetting = (id) => API.get(`/approutesettings/${id}`);
export const fetchAppRouteSettings = (page) =>
  API.get(`/approutesettings?page=${page}`);
export const fetchAppRouteSettingsBySearch = (searchQuery) =>
  API.get(
    `/approutesettings/search?searchQuery=${searchQuery.search || "none"}`
  );

export const createAppRouteSetting = (newAppRouteSetting) =>
  API.post("/approutesettings", newAppRouteSetting);
export const updateAppRouteSetting = (id, updatedAppRouteSetting) =>
  API.patch(`/approutesettings/${id}`, updatedAppRouteSetting);
export const deleteAppRouteSetting = (id) =>
  API.delete(`/approutesettings/${id}`);

// CRUD for app lookups settings  -- /lookupsettings
export const fetchLookupSetting = (id) => API.get(`/lookupsettings/${id}`);
export const fetchLookupSettings = (page) =>
  API.get(`/lookupsettings?page=${page}`);
export const fetchLookupSettingsBySearch = (searchQuery) =>
  API.get(`/lookupsettings/search?searchQuery=${searchQuery.search || "none"}`);

export const createLookupSetting = (newLookupSetting) =>
  API.post("/lookupsettings", newLookupSetting);
export const updateLookupSetting = (id, updatedLookupSetting) =>
  API.patch(`/lookupsettings/${id}`, updatedLookupSetting);
export const deleteLookupSetting = (id) => API.delete(`/lookupsettings/${id}`);
