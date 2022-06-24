import axios from "axios";
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
