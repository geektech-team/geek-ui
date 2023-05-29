import type { App } from 'vue';
import GTag from './tag.vue';

// 作为插件引入
GTag.install = function (app: App): void {
  app.component(GTag.name, GTag);
};

// 按需
export { GTag };

// 内部统一注册
export default {
  title: 'GTag',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(GTag.name, GTag);
  },
};
