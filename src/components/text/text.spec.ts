// // 引入测试相关依赖
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GText } from './index';

describe('GText', () => {
  const codeWrapper = mount(GText, { props: { type: 'code' }, slots: { default: 'code' } });
  const underlineWrapper = mount(GText, { props: { type: 'underline' }, slots: { default: 'underline' } });
  const delWrapper = mount(GText, { props: { type: 'del' }, slots: { default: 'del' } });
  const strongWrapper = mount(GText, { props: { type: 'strong' }, slots: { default: 'strong' } });
  const disabledWrapper = mount(GText, { props: { type: 'disabled' }, slots: { default: 'disabled' } });
  it('render', () => {
    expect(codeWrapper).toBeTruthy();
  });
  it('renders slots', () => {
    expect(codeWrapper.text()).toContain('code');
    expect(underlineWrapper.text()).toContain('underline');
    expect(delWrapper.text()).toContain('del');
    expect(strongWrapper.text()).toContain('strong');
    expect(disabledWrapper.text()).toContain('disabled');
  });
});
