import { h } from 'vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { GScrollbarBox } from './index';

describe('GScrollbarBox', () => {
  const wrapper = mount(GScrollbarBox, { props: {}, slots: { default: h('h1', {}, 'Named Slot') } });
  it('render', () => {
    expect(wrapper).toBeTruthy();
  });
  it('renders slots', () => {
    expect(wrapper.html()).toContain('<h1>Named Slot</h1>');
  });
});
