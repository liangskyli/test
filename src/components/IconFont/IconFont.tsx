import type { FC } from 'react';

type IconProps = {
  name: string;
  className?: string;
  [key: string]: any;
};

const customCache = new Set<string>();

export type CustomIconOptions = {
  scriptUrl: string;
  extraCommonProps: Record<string, any>;
};

export default function create(options: CustomIconOptions): FC<IconProps> {
  const { scriptUrl, extraCommonProps } = options;

  const generateScript = (tryCount: number = 0) => {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('data-namespace', scriptUrl);
    script.setAttribute('data-testid', 'svg-script');
    /* script.onload = () => {
      setTimeout(() => {
        const hasLoadedIcon = document.getElementById('icon-my') !== null;
        if (!hasLoadedIcon) {
          console.log('加载iconfont资源文件成功，但没有生成svg');
        }
      }, 1000);
    }; */
    script.onerror = () => {
      // eslint-disable-next-line no-plusplus
      tryCount++;
      // 错误重试加载3次，即最多共加载4次
      if (tryCount <= 3) {
        setTimeout(() => {
          document.body.appendChild(generateScript(tryCount));
        }, 50);
      } else {
        console.log('加载iconfont资源文件失败');
      }
    };
    return script;
  };

  /**
   * DOM API required.
   * Make sure in browser environment.
   * The Custom Icon will create a <script/>
   * that loads SVG symbols and insert the SVG Element into the document body.
   */
  if (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    typeof document.createElement === 'function' &&
    scriptUrl.length &&
    !customCache.has(scriptUrl)
  ) {
    const script = generateScript();
    customCache.add(scriptUrl);
    document.body.appendChild(script);
  }

  const Iconfont: FC<IconProps> = (props) => {
    const { name, size, className, ...restProps } = props;
    // component > name
    let content = null;
    if (props.name) {
      content = <use data-testid="svg-use" xlinkHref={`#${name}`} />;
    }

    return (
      <svg
        data-testid="svg-icon"
        className={`am-icon am-icon-${size} ${className}`}
        {...extraCommonProps}
        {...restProps}
        aria-hidden="true"
      >
        {content}
      </svg>
    );
  };

  Iconfont.displayName = 'Iconfont';

  return Iconfont;
}
