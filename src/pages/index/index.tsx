import { Button, InputItem } from 'antd-mobile';
import type { IndexModelState, ConnectRC, Loading } from 'umi';
import { Link, connect } from 'umi';
import IconFont from '@/components/IconFont';
import styles from './index.less';
import TabBar from '@/components/TabBar';

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
      <div>热更新问题</div>
      <div>aaa</div>
      <ul className={styles.list}>
        <li>
          <Link to="/me">前往个人中心</Link>
        </li>
        <li>
          <IconFont name="icon-common-back-help" className={styles['help-icon']} />
        </li>
      </ul>
      <Button type="primary" onClick={() => myButton()}>
        test
      </Button>
      {inputComponent()}
      <TabBar activeTab="orderList" />
    </div>
  );
};
export default connect(({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
  index,
  loading: loading.models.index,
}))(IndexPage);
