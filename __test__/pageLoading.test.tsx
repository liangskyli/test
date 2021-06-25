import { render } from '@testing-library/react';
import LoadingComponent from '../src/components/PageLoading/index';

describe('测试 PageLoading 组件', () => {
  it('PageLoading 组件是否能够渲染成功', () => {
    const wrapper = render(<LoadingComponent />);
    expect(wrapper.getByText('加载中...').textContent).toBe('加载中...');
  });
});
