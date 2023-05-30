import type { App } from 'vue';
import GText from './text.vue';

GText.install = function (app: App): void {
  app.component(GText.name, GText);
};

// 按需
export { GText };

// 内部统一注册
export default {
  title: 'GText',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(GText.name, GText);
  },
};
