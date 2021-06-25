const hostName = window.location.hostname;
const loadJS = (url: string, callback: () => void) => {
  const script: any = document.createElement('script');
  const fn = callback || (() => {});

  script.type = 'text/javascript';

  script.onload = () => {
    fn();
  };

  script.src = url;

  document.getElementsByTagName('head')[0].appendChild(script);
};

if (hostName === 'test-ztcwx.myscrm.cn') {
  // sub-react-h5-example 替换为自己站点虚拟目录
  // 也可以使用eruda.js，文件在public目录下
  loadJS('//test-ztcwx.myscrm.cn/sub-react-h5-example/vconsole.min.js', () => {
    const VConsoleTemp: any = (window as any).VConsole;
    if (typeof VConsoleTemp !== 'undefined') {
      new VConsoleTemp();
    }
  });
}

export const dva = {
  config: {
    onError(err: ErrorEvent) {
      console.error(err.message);
    },
  },
};
