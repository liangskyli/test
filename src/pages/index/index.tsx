import type { IndexModelState, ConnectRC, Loading } from 'umi';
import { connect } from 'umi';
import IconFont from '@/components/IconFont';
import styles from './index.less';
import TabBar from '@/components/TabBar';

type PageProps = {
  index: IndexModelState;
  loading: boolean;
};

const IndexPage: ConnectRC<PageProps> = ({ index }) => {
  const { name } = index;

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>title</h1>
      <div className={styles.title}>name:{name.ykPublicKey}</div>
      <div>热更新问题</div>
      <div>aaa</div>
      <IconFont name="icon-common-back-help" />
      <TabBar activeTab="orderList" />
    </div>
  );
};
export default connect(({ index, loading }: { index: IndexModelState; loading: Loading }) => ({
  index,
  loading: loading.models.index,
}))(IndexPage);
