import { createApp, Directive, RendererElement } from 'vue';
import { GLoading } from '../components/loading';

export const loading: Directive = {
  mounted (el, binding) {
    const app = createApp(GLoading);
    const instance = app.mount(document.createElement('div'));
    el.instance = instance;
    if (binding.value) {
      appendEl(el);
    }
  },
  updated (el, binding) {
    if (binding.value !== binding.oldValue) {
      binding.value ? appendEl(el) : removeEl(el);
    }
  },
};

const appendEl = (el: RendererElement) => {
  el.appendChild(el.instance.$el);
};

const removeEl = (el: RendererElement) => {
  el.removeChild(el.instance.$el);
};
