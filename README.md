config/config.ts里

1、chunks的设置构建会有问题
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

2、这个运行时错误
extraBabelPlugins: [
['import', { libraryName: 'antd-mobile', style: true }], //按需加载antd-mobile样式文件
],

这两个问题，代码注释就正常，windows,mac都有问题
