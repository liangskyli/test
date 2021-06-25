### 项目说明
该项目主要以 [UMI](https://umijs.org/zh/) + [DVA](https://dvajs.com/) 为底层框架，以[Ant Design Mobile](https://mobile.ant.design/)为 UI 组件库。

项目集成了 redux、redux-saga、px2rem 等库，目前默认启用 immer 以方便修改 reducer，如果用得不爽的可以提出做出修改。

### 目录结构
    |-- __test__                              # 单元测试
    |-- config                                # umi 配置、webpack构建、项目主题等配置
    |-- mock                                  # 本地模拟数据
    |-- public                                # 目录下的文件不构建，打包直接复制
    |   |-- favicon.png                       # favicon
    |-- src                                   # 
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务通用组件
    |   |-- layout                            # 通用布局
    |   |-- models                            # 全局 dva model
    |   |-- api                               # 后台接口服务
    |   |-- pages                             # 业务页面入口和常用模板
    |   |-- router                            # 路由配置
    |   |-- styles                            # 全局样式通用函数功能集合
    |   |-- global.less                       # 全局样式
    |   |-- app.ts                            # 全局 JS
    |--  Dockerfile                           # Dockerfile文件
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintignore                         # eslint忽略文件
    |-- .eslintrc                             # eslint规则
    |-- .stylelintrc                          # stylelint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- tsconfig.json                         # typescript 相关配置
    |-- jest.config.js                        # 单元测试配置文件
    |-- .stylelintrc                          # 样式风格配置文件
    |-- package.json                          
    |-- README.md                              

### 支持环境："node": ">=12.0.0"
### 项目如何启动
```bash
$ yarn
$ yarn start
```

### 项目编译
```bash
yarn build
```

### 后台开发人员本地构建编译
```bash
yarn build:dev
```

### 如何查看包结构
执行 ```yarn analyze ``` 可查看产物的依赖占比。

### 可以使用 ahooks 所有 hooks
官网地址 ``` https://ahooks.js.org/zh-CN/docs/getting-started ```

### 移动端适配
> 项目设置了移动端适配，默认是按照UI设计图750宽度设置的，如需修改可以根据自己设计图实际情况到 ./config/config.js 文件进行修改
```
px2rem({
    remUnit: 75,
    exclude: /node_modules/i,
})
```

### 主题
> 结合了 ant-design-mobile 的UI组件库，目前已定义了一套默认的主题，如需修改可以到 ./config/theme.js 进行修改
### 自定义字体文件使用
>在 src/utils/config.ts 里配置字体文件路径
```js
//引用文件
import IconFont from '@/components/IconFont';

// 参数：
// name 字体文件名称
// size 'xxs' | 'xs' | 'sm' | 'md' | 'lg'; size延用antd-mobile 的默认设置，没有默认设置
// className class名
//注意：图标大小用width,height 控制，可以使用 size 或 className设置

//使用方法
<IconFont
    name="icon-common-back-help"
    className={styles['help-icon']}
/>
```
### 开发配置
> 目录下配置local.config.js文件(必须配置,初始化时会自动生成),默认配置和说明如下：
```js
module.exports = {
  serverProxy: '',// 接口代理host配置
  // mock数据开关，true 全部开启，false关闭，也可以传对象{}
  mock: false,
  // exclude，格式为 Array(string)，用于忽略不需要走 mock 的文件
  /* mock: {
     exclude: ['mock/api.ts'],
   } */
};

```
> package.json文件里配置信息
```
{
  "name": "react-h5-example",//git库名称
  "config": {
    "devHost": "127.0.0.1",//开发服务器名称
    "devPort": 8000,//开发端口
    "publicPath:build:dev": "/"  //后台开发人员本地构建路径配置
  },
}
```

### 单元测试
> 单元测试文件写在 __test__ 文件加下，文件命名以 xxx.test.ts 格式命名，否则无法识别是单元测试文件。
