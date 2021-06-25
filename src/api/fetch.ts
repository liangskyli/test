/**
 * 使用方式：
 *    1、在requestConfig.ts定义请求地址和请求方式
 *    2、调用
 * 调用：
 * // 如果是 post 请求想要添加param参数，可以传两个对象参数；如果是 get 请求，只需要传一个参数即可
 * Api.demo({posId: "12451242"}, {...}).then(res => {})
 */
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { Toast } from 'antd-mobile';
// eslint-disable-next-line import/no-extraneous-dependencies
// import qs from 'qs';//php接口需要
import type { IJsonData } from '@/api/handleRetCode';
import handleRetCode from '@/api/handleRetCode';
import requestConfig from './requestConfig';

declare type Methods = 'GET' | 'OPTIONS' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
declare type IData = {
  method?: Methods;
  [key: string]: any;
};
declare type IConfig = AxiosRequestConfig & { hideLoading?: boolean };
const baseUrl = window.location.origin;
(window as any).axiosCancelArr = {};

// 请求失败处理逻辑
const requestFail = (res: AxiosResponse<IJsonData>) => {
  // 处理自定义错误逻辑
  const errStr = handleRetCode(res);

  console.error({
    retCode: res.data.retCode,
    retMsg: res.data.retMsg || errStr,
  });

  return res.data;
};

class HttpRequest {
  public queue: Record<string, IConfig>;

  constructor() {
    this.queue = {};
  }

  destroy(url: string) {
    delete (window as any).axiosCancelArr[url];
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // hide loading
      Toast.hide();
    }
  }

  interceptors(instance: AxiosInstance, url: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: IConfig) => {
        config.cancelToken = new axios.CancelToken((cancel) => {
          (window as any).axiosCancelArr[url] = cancel;
        });
        // 添加全局的loading...
        if (!Object.keys(this.queue).length && !config.hideLoading) {
          // show loading
          Toast.loading('加载中...', 0);
        }
        // config.data = qs.stringify(config.data); // 转为formdata数据格式 php接口需要
        if (!config.hideLoading) {
          this.queue[url] = config;
        }
        return config;
      },
      (error: any) => {
        console.error(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse<IJsonData>) => {
        this.destroy(url);
        if (typeof res.data.retCode !== 'undefined') {
          // 解决php代码历史问题
          // retCode 后台接口返回数字或字符串，这里统一处理 number 转 string
          res.data.retCode = res.data.retCode.toString();
        }
        const { data, status } = res;
        if (status === 200 && data && data.retCode === '0') {
          // 请求成功
          return data as any;
        }

        return Promise.reject<IJsonData>(requestFail(res)); // 失败回调
      },
      (error: any) => {
        this.destroy(url);
        if (error.message !== 'axiosCancelArr') {
          switch (error.message) {
            case 'Network Error':
              Toast.info('网络错误');
              break;
            case 'Request failed':
              Toast.info('请求失败');
              break;
            case 'Request aborted':
              break;
            default:
              Toast.info(error.message);
              break;
          }
        }
        console.error(error);
        return Promise.reject(error); // 失败回调
      },
    );
  }

  async request(options: AxiosRequestConfig) {
    const instance = axios.create();
    await this.interceptors(instance, options.url!);
    return instance(options) as any;
  }
}

// 合并axios参数
const combineOptions = (_opts: IConfig | string, data: IData, req: any): AxiosRequestConfig => {
  let opts = _opts;
  if (typeof opts === 'string') {
    opts = { url: opts };
  }
  const concatData = { ...opts.data, ...data };
  const options = {
    method: opts.method || data.method || 'GET',
    url: opts.url,
    hideLoading: !!opts.hideLoading,
    headers: { 'X-Requested-With': 'XMLHttpRequest' }, // php后台代码需要用到
    baseUrl: opts.baseURL ?? baseUrl,
  };
  if (options.method === 'GET') {
    // 部分andriod机后退ajax缓存处理
    concatData.t = Date.parse(new Date().toString());
  }
  return <any>(
    (options.method !== 'GET'
      ? Object.assign(options, { data: concatData, params: req })
      : Object.assign(options, { params: { ...concatData, ...req } }))
  );
};

const HTTP = new HttpRequest();

type IApi = Record<
  string,
  (data?: Record<string, unknown>, req?: Record<string, unknown>) => Promise<IJsonData>
>;

/**
 * 抛出整个项目的api方法
 */
const Api = (() => {
  const apiObj: IApi = {};
  const requestList = requestConfig;
  const fun = (opts: IConfig | string) => {
    return async (data = {}, req = {}): Promise<IJsonData> => {
      const newOpts = combineOptions(opts, data, req);
      const res = await HTTP.request(newOpts);
      return Promise.resolve<IJsonData>(res);
    };
  };
  Object.keys(requestConfig).forEach((key) => {
    apiObj[key] = fun(requestList[key]);
  });
  return apiObj;
})();

export default Api;
