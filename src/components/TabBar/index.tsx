import IconFont from '@/components/IconFont';
// import { history } from 'umi';
import styles from './index.less';
import { memo } from 'react';

type Props = {
  activeTab: 'roomList' | 'favoriteList' | 'orderList' | 'indexPage';
};

export default memo(
  (props: Props) => {
    const { activeTab } = props;
    console.log(activeTab);

    return <IconFont name="icon-common-back-help" className={styles['help-icon']} />;
  },
  () => {
    return true;
  },
);
