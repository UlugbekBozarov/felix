import axios from "axios";
import { get } from "lodash";

import {
  clearCookie,
  getAuthorizationKey,
  getAuthorizationSign,
  getLanguage,
} from "services/storage";

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": getLanguage(),
    "Utc-Offset": new Date().getTimezoneOffset(),
    Key: getAuthorizationKey(),
    Sign: getAuthorizationSign(),
  },
});

client.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (get(error, "response.status") === 403) {
      clearCookie();
      window.location.href = "/";
    }
    return Promise.reject(error?.response?.data);
  }
);

export default client;
