// // 引入测试相关依赖
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GPagination } from './index';

describe('GPagination', () => {
  const wrapper = mount(GPagination, {
    props: { pageSize: 10, total: 100, jumper: true },
  });
  it('Render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('Jumper', () => {
    expect(wrapper.find('.jump-to').element).toBeDefined();
  });
});
