import axios from "axios";

import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

import { start, done } from "@/core/utils/nprogress";

const service: AxiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// 请求拦截器
service.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    start();
    return config;
  },
  function (error) {
    done();
    return Promise.reject(error);
  },
);

// 响应拦截器
service.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    done();
    return response;
  },
  function (error) {
    done();
    return Promise.reject(error);
  },
);

export default service;
