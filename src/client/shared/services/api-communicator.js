import config from '@client/config';
import axios from 'axios';

const apiInstance = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 4 * 60000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

apiInstance.interceptors.request.use((config) => {
  if (config.setTimeout) {
    config.timeout = config.setTimeout;
  }
  return config;
});

const http = {
  ...apiInstance
};

export default http;
