const fs = require('fs');

const cdn = 'img.myscrm.cn';

function getPackageInfo() {
  const info = require(`${process.cwd()}/package.json`);
  return {
    name: info.name,
    config: info.config,
  };
}

const { name: project_name, config: packageConfig } = getPackageInfo();

function getPublicPath() {
  if (process.env.NODE_ENV === 'production') {
    // 容器部署
    let publicPath = `//${cdn}/dist/${project_name}-${process.env.IMAGE_TAG}/`.replace(
      'http://',
      'https://',
    );
    if (process.env.buildType === 'dev') {
      // 后台开发本地构建部署
      publicPath = packageConfig['publicPath:build:dev'];
    }
    return publicPath;
  }
  return '/';
}

const getLocalConfig = (property: string) => {
  const configPath = './local.config.js';
  try {
    const isExist = fs.existsSync(configPath);
    if (isExist) {
      const localConfigData = require('../local.config.js');
      return localConfigData[property];
    } else {
      throw Error('请先配置local.config.js文件');
    }
    return false;
  } catch (e) {
    console.log(e);
    process.exit();
  }
};

export default { getPublicPath, getLocalConfig, packageConfig };
