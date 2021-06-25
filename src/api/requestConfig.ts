import Config from '../utils/config';

const { basePrefix } = Config;

export type IRequestConfig = Record<
  string,
  | {
      url: string;
      method?: 'GET' | 'POST'; // 默认get请求
      hideLoading?: boolean;
      baseURL?: string;
    }
  | string
>;

/**
 * 不写method，默认是get请求
 */

const requestConfig: IRequestConfig = {
  getList: `${basePrefix}/get-yk-public-key`,
  getBookList: { url: `${basePrefix}/get-block-list`, method: 'POST' },
};

export default requestConfig;
