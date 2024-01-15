import axios from 'axios';
// import { store } from "../redux/store";
const API_URL = import.meta.env.VITE_BACKEND_URL || 'https://65a3929aa54d8e805ed3ba8b.mockapi.io';

const axiosClient = axios.create({ baseURL: API_URL });

// axiosClient.interceptors.request.use(function (config) {
//   config.withCredentials = true;
//   return config;
// });

export { axiosClient };
