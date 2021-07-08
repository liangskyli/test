import type { FC } from 'react';
import { useEffect } from 'react';
import type { Loading } from 'umi';
import { connect } from 'umi';
import type { ConnectState } from '@/models/connect';
import styles from './index.less';

export type IBasicLayout = {
  loading: Loading;
  [key: string]: any;
};
const BasicLayout: FC<IBasicLayout> = (props) => {
  const {
    children,
    location: { pathname },
  } = props;

  const { href } = window.location; // 浏览器地址栏中地址

  useEffect(() => {
    return () => {
      const { axiosCancelArr } = window as any;
      if (axiosCancelArr) {
        // 跳转页面，取消ajax请求
        Object.keys(axiosCancelArr).forEach((key) => {
          axiosCancelArr[key]('axiosCancelArr');
        });
      }
    };
  }, [href]);

  return (
    <div key={pathname}>
      <div className={styles.normal}>{children}</div>
    </div>
  );
};

export default connect(({ loading }: ConnectState) => ({
  loading,
}))(BasicLayout);
