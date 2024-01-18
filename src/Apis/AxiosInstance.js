import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://65a3929aa54d8e805ed3ba8b.mockapi.io';
const AUTH_API_URL = import.meta.env.VITE_AUTH_BACKEND_URL || 'http://127.0.0.1:3333';

const axiosClient = axios.create({ baseURL: API_URL });
const axiosAuth = axios.create({ baseURL: AUTH_API_URL });

// axiosAuth.interceptors.request.use(function (config) {
//   config.withCredentials = true;
//   return config;
// });
axiosAuth.defaults.withCredentials = true;

axiosClient.interceptors.response.use(
  function (response) {
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    let res = {};
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    return res;
  }
);
axiosAuth.interceptors.response.use(
  function (response) {
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    let res = {};
    if (error.response) {
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    return res;
  }
);
export { axiosClient, axiosAuth };
