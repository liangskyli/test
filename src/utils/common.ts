/**
 * @Description: 公共函数
 */

/**
 * 校验手机号是否正确
 * @param phone 手机号
 */
export const verifyPhone = (phone: string | number) => {
  const reg = /^1[34578][0-9]{9}$/;
  const cphone = phone.toString().trim();
  const toastStr = cphone === '' ? '手机号不能为空~' : !reg.test(cphone) && '请输入正确手机号~';
  return {
    errMsg: toastStr,
    done: !toastStr,
    value: cphone,
  };
};

/**
 * 判断是属于 iOS终端 还是 android终端
 */
export const isAndroidOrIos = () => {
  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // 判断是否是 android终端
  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判断是否是 iOS终端
  return isIOS ? 'IOS' : isAndroid && 'Android';
};
