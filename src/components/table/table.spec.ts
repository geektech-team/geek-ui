// // 引入测试相关依赖
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GTable } from './index';

describe('GTable', () => {
  const primaryWrapper = mount(GTable, { slots: { default: 'Primary' } });
  it('render', () => {
    expect(primaryWrapper).toBeTruthy();
  });
});
