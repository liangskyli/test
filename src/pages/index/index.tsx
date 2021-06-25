import { Button, InputItem } from 'antd-mobile';
import type { IndexModelState, ConnectRC, Loading } from 'umi';
import { Link, connect } from 'umi';
import IconFont from '@/components/IconFont';
import styles from './index.less';
import mockjs from 'mockjs';

console.log(mockjs.Random.string(3, 6));

type PageProps = {
  index: IndexModelState;
  loading: boolean;
};

const inputComponent = () => {
  return (
    <div>
      <InputItem placeholder="no label" />
    </div>
  );
};

const IndexPage: ConnectRC<PageProps> = ({ index, dispatch }) => {
  const { name } = index;

  const myButton = () => {
    dispatch({
      type: 'index/query',
      payload: { posId: '12451242' },
    }).then((res: any) => {
      console.log(res);
    });
  };

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>title</h1>
      <div className={styles.title}>name:{name.ykPublicKey}</div>
      <ul className={styles.list}>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <IconFont name="icon-common-back-help" className={styles['help-icon']} />
        </li>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
      </ul>
      <Button type="primary" onClick={() => myButton()}>
        test
      </Button>
      {inputComponent()}
    </div>
  );
};
export default connect(({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
  index,
  loading: loading.models.index,
}))(IndexPage);
