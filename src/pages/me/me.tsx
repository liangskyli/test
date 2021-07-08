import { Icon, NavBar } from 'antd-mobile';
import { Link } from 'umi';
import styles from './index.less';
import mockjs from 'mockjs';

console.log(mockjs.Random.string(3, 6));

export default () => {
  return (
    <div className={styles.normal}>
      <NavBar mode="dark" icon={<Icon type="left" />} onLeftClick={() => window.history.back()}>
        前往个人中心
      </NavBar>
      <h1 className={styles.title}>前往个人中心</h1>
      <Link to="/">首页</Link>
    </div>
  );
};
