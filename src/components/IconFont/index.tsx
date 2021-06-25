import Config from '@/utils/config';
import create from './IconFont';
import { memo } from 'react';

/* //引用文件
import IconFont from '@/components/IconFont';

// 参数：
// name 字体文件名称
// size 'xxs' | 'xs' | 'sm' | 'md' | 'lg'; size延用antd-mobile 的默认设置，没有默认设置
// className class名
//注意：图标大小用width,height 控制，可以使用 size 或 className设置

//使用方法
<IconFont
  name="icon-common-back-help"
  className={styles['help-icon']}
/> */

export type Props = {
  name: string;
  style?: any;
  className?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
};

export default memo(
  (props: Props) => {
    const { name, style = {}, size = '', className = '' } = props;

    const MyIcon = create({
      scriptUrl: Config.scriptUrl,
      extraCommonProps: {
        style,
      },
    });

    return <MyIcon className={className} name={name} size={size} />;
  },
  (prevProps, nextProps) => {
    return (
      prevProps.name === nextProps.name &&
      prevProps.style === nextProps.style &&
      prevProps.className === nextProps.className &&
      prevProps.size === nextProps.size
    );
  },
);
