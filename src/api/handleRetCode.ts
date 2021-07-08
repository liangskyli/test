import { Toast } from 'antd-mobile';
import type { AxiosResponse } from 'axios';

export type IJsonData<T = any> = {
  retCode: string;
  retMsg: string;
  data: T;
};

// 处理自定义错误逻辑
export default (res: AxiosResponse<IJsonData>) => {
  const errStr = '网络繁忙，请稍后重试！';
  // 登录失效，重新登录
  if (res.data.retCode === '1000001') {
    // 登录超时 code 是多少自己修改
    Toast.info('登录超时，请重新登录', 3, () => {
      // 登录失效跳转逻辑
    });
  } else {
    Toast.info(`${res.data.retMsg || errStr}，错误码：${res.data.retCode}` || null);
  }

  return errStr;
};
