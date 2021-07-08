//构建初始化前，没有local.config.js文件，要创建文件
//解决umi构建前会解析所有路径文件是否存在（尽管在函数中动态引用了并没有使用到的文件）
const fs = require('fs');

const initLocalConfigJsFile = () => {
  const configPath = './local.config.js';
  try {
    const isExist = fs.existsSync(configPath);
    if (!isExist) {
      const jsTemplate = `module.exports = {
  serverProxy: '',// 接口代理host配置
  // mock数据开关，true 全部开启，false关闭，也可以传对象{}
  mock: false,
  // exclude，格式为 Array(string)，用于忽略不需要走 mock 的文件
  /* mock: {
     exclude: ['mock/api.ts'],
   } */
};`;
      fs.writeFileSync(configPath, jsTemplate);
    }
  } catch (e) {
    console.log(e);
    process.exit();
  }
};

initLocalConfigJsFile();
