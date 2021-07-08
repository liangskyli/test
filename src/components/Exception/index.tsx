import classNames from 'classnames';
import type { ReactNode, CSSProperties } from 'react';
import { PureComponent } from 'react';
import { Link } from 'umi';
import config from './typeConfig';

import styles from './index.less';

export type IExceptionProps = {
  type?: '404' | '500';
  title?: ReactNode;
  desc?: ReactNode;
  img?: string;
  style?: CSSProperties;
  className?: string;
  backText?: ReactNode;
};

class Exception extends PureComponent<IExceptionProps, any> {
  public static defaultProps = {
    backText: '返回首页',
    redirect: '/',
  };

  constructor(props: Readonly<IExceptionProps>) {
    super(props);
    this.state = {};
  }

  public render() {
    const { className, backText, type = '404', title, desc, img, ...rest } = this.props;
    const pageType = type in config ? type : '404';
    const clsString = classNames(styles.exception, className);
    return (
      <div className={clsString} {...rest}>
        <div className={styles.imgBlock}>
          <div
            className={styles.imgEle}
            style={{ backgroundImage: `url(${img || config[pageType].img})` }}
          />
        </div>
        <div className={styles.content}>
          <h1>{title || config[pageType].title}</h1>
          <div className={styles.desc}>{desc || config[pageType].desc}</div>
          <div>
            <Link to="/">{backText}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Exception;
