import { IConfig } from '@umijs/types';
import tools from './tools';

let config: IConfig = {};

if (process.env.NODE_ENV === 'development') {
  const { getLocalConfig, packageConfig } = tools;
  const mock = getLocalConfig('mock');
  // ref: https://umijs.org/config/
  config = {
    mock: mock === true ? {} : mock,
    fastRefresh: {},
    devServer: {
      port: (packageConfig as any).devPort,
      host: (packageConfig as any).devHost,
    },
    proxy: {
      '/app/': {
        target: getLocalConfig('serverProxy') || 'https://aaa.cn/app',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '/app': '/' },
      },
    },
  };
}

export default { config };
