import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.interceptors.request.use(function (config) {
  Toast.loading('Loading...', 0);
  return config;
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  Toast.hide();
  return response;
});