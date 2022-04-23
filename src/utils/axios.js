import axios from 'axios';

const service = axios.create({
  // baseURL: '',
  timeout: 50000,
  // withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  useCache: false, // 是否使用缓存
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

service.interceptors.response.use(
  (response) => {
    const {
      config,
      data: { statusCode, data: result },
    } = response;

    if (statusCode !== '0') {
      return Promise.reject(new Error('Request error'));
    }

    return { data: result };
  },
  (error) => {
    return Promise.reject(new Error('Request error'));
  },
);

export default service;
