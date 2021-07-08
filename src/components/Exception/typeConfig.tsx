const img404 = require('@/assets/404.svg');
const img500 = require('@/assets/500.svg');

const config = {
  '404': {
    img: img404,
    title: '404',
    desc: '抱歉，你访问的页面不存在',
  },
  '500': {
    img: img500,
    title: '500',
    desc: '抱歉，服务器出错了',
  },
};

export default config;
