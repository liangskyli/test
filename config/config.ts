import { defineConfig } from 'umi';
import { IConfig } from '@umijs/types';
import pageRoutes from '../src/router/routers';
import devConfig from './dev.config';
import defaultSettings from './defaultSettings';
import tools from './tools';
// @ts-ignore
import px2rem from 'postcss-plugin-px2rem';
import { IConfigFromPlugins } from '@@/core/pluginConfig';

// ref: https://umijs.org/config/
const config: IConfigFromPlugins | IConfig = {
  ...devConfig.config,
  ...defaultSettings,
  dva: {
    immer: true,
    hmr: true,
  },
  base: '/sub-react-h5-example/', // 配置虚拟目录，按项目实际情况决定是否需要
  publicPath: tools.getPublicPath(),
  routes: pageRoutes,
  //sass: {},
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  mfsu: {}, // 只需要 dev，这么配
  webpack5: {},
  // 多页面提取公共js文件 begin
  chunks: ['vendors', 'umi'],
  chainWebpack: function (config, { env }) {
    config.merge({
      optimization: {
        minimize: env === 'production',
        splitChunks: {
          chunks: 'all',
          minSize: 1,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: any) {
                return true; // /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
  // 多页面提取公共js文件 end
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 75,
      minPixelValue: 2,
      selectorBlackList: ['html'],
      exclude: /(node_module)/,
    }),
  ],
  history: { type: 'browser' }, // 默认是 browser
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  outputPath: './dist',
  hash: true,
  manifest: {
    basePath: '/',
  },
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', style: true }], //按需加载antd-mobile样式文件
  ],
};

export default defineConfig(config);
