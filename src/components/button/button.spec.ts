// // 引入测试相关依赖
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GButton } from './index';

describe('GButton', () => {
  const primaryWrapper = mount(GButton, { props: { type: 'primary' }, slots: { default: 'Primary' } });
  it('render', () => {
    expect(primaryWrapper).toBeTruthy();
  });
  it('renders slots', () => {
    expect(primaryWrapper.text()).toContain('Primary');
  });
});
