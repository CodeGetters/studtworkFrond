/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// import { start, done } from "@/core/utils/nprogress";

// const service: AxiosInstance = axios.create({
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//   },
// });

// // 添加请求拦截器
// service.interceptors.request.use(
//   function (config) {
//     start();
//     return config;
//   },
//   function (error) {
//     done();
//     return Promise.reject(error);
//   },
// );

// // 添加响应拦截器
// service.interceptors.response.use(
//   function (response) {
//     done();
//     return response;
//   },
//   function (error) {
//     done();
//     return Promise.reject(error);
//   },
// );

// export default service;

type baseApiResponse<T> = {
  code: number;
  message: string;
  result: T;
};

// 拓展 axios 请求配置，加入我们自己的配置
interface requestOptions {
  // 是否全局展示请求 错误信息
  globalErrorMessage?: boolean;
  // 是否全局展示请求 成功信息
  globalSuccessMessage?: boolean;
}

// 拦截器
export interface interceptorHooks {
  // 请求拦截器
  requestInterceptor?: (
    config: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;

  // 响应拦截器
  responseInterceptor?: (
    response: AxiosResponse,
  ) => AxiosResponse | Promise<AxiosResponse>;
  responseInterceptorCatch?: (error: any) => any;
}

// 加入自定义的配置
interface expandAxiosRequestConfig<D = any> extends AxiosRequestConfig<D> {
  // 自定义拦截器
  interceptorHooks?: interceptorHooks;

  // 拓展的自定义配置
  requestOptions?: requestOptions;
}

// 拓展 axios 请求配置
interface expandInternalAxiosRequestConfig<D = any>
  extends InternalAxiosRequestConfig<D> {
  // 自定义拦截器
  interceptorHooks?: interceptorHooks;
  // 自定义配置
  requestOptions?: requestOptions;
}

// 拓展 axios 返回配置
interface expandAxiosResponse<T = any, D = any> extends AxiosResponse<T, D> {
  config: expandInternalAxiosRequestConfig<D>;
}

// 导出 Request 类，可以用来自定义传递配置来创建实例
export default class Request {
  private instance: AxiosInstance;

  // 默认配置
  private defaultConfig: expandAxiosRequestConfig = {
    baseURL: "/api",
    timeout: 5000,
    requestOptions: {
      globalErrorMessage: true,
      globalSuccessMessage: false,
    },
  };

  private interceptorHooks?: interceptorHooks;

  constructor(config: expandAxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.defaultConfig, config));
    this.interceptorHooks = config.interceptorHooks;

    this.setupInterceptors();
  }

  // 通用拦截，在初始化时就进行注册和运行，对基础属性进行处理
  private setupInterceptors() {
    // 使用自定义拦截器
    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptorHooks?.requestInterceptor,
      this.interceptorHooks?.requestInterceptorCatch,
    );

    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptorHooks?.responseInterceptor,
      this.interceptorHooks?.responseInterceptorCatch,
    );
  }

  // 定义核心请求
  public request(config: expandAxiosRequestConfig): Promise<AxiosResponse> {
    // ！！！⚠️ 注意：axios 已经将请求使用 promise 封装过了
    // 这里直接返回，不需要我们再使用 promise 封装一层
    return this.instance.request(config);
  }

  public get<T = any>(
    url: string,
    config?: expandAxiosRequestConfig,
  ): Promise<AxiosResponse<baseApiResponse<T>>> {
    return this.instance.get(url, config);
  }

  public post<T = any>(
    url: string,
    data?: any,
    config?: expandAxiosRequestConfig,
  ): Promise<T> {
    return this.instance.post(url, data, config);
  }

  public put<T = any>(
    url: string,
    data?: any,
    config?: expandAxiosRequestConfig,
  ): Promise<T> {
    return this.instance.put(url, data, config);
  }

  public delete<T = any>(
    url: string,
    config?: expandAxiosRequestConfig,
  ): Promise<T> {
    return this.instance.delete(url, config);
  }
}
