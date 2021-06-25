import { Modal } from 'antd-mobile';
import type { MouseEventHandler } from 'react';
import { Fragment } from 'react';
import './index.less';
import IconFont from '@/components/IconFont';

export type Props = {
  title?: string;
  visible: boolean;
  className?: string;
  closePopUp: MouseEventHandler<any>;
  type?: 'popup' | 'middle';
  [propname: string]: any;
};

export default function PopUp(props: Props) {
  const {
    title = '',
    visible = false,
    type = 'popup',
    className = '',
    closePopUp,
    children,
  } = props;

  return (
    <Modal
      className={`popup-modal ${className}`}
      popup={type === 'popup'}
      visible={visible}
      animationType="slide-up"
    >
      <Fragment>
        <div className="title fz32 txt-center color5 pos-r border-b">
          {title}
          <div className="pos-a cancel" onClick={closePopUp}>
            <IconFont name="icon-ydjy-guanbidankuang" className="icon-close colorwrite color3" />
          </div>
        </div>
        {children}
      </Fragment>
    </Modal>
  );
}
