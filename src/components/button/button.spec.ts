// // 引入测试相关依赖
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { Button } from './index';

describe('Button', () => {
  const wrapper = mount(Button, { props: { type: 'primary' }, slots: { default: 'Primary' } });
  it('render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('renders slots', () => {
    expect(wrapper.text()).toContain('Primary');
  });
});
