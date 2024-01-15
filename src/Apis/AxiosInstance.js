import axios from 'axios';
// import { store } from "../redux/store";
const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://65a3929aa54d8e805ed3ba8b.mockapi.io';

const axiosClient = axios.create({ baseURL: API_URL });

// axiosClient.interceptors.request.use(function (config) {
//   config.withCredentials = true;
//   return config;
// });
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

export { axiosClient };
