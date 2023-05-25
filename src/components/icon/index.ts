import type { App } from 'vue';
import GIcon from './icon.vue';

// 作为插件引入
GIcon.install = function (app: App): void {
  app.component(GIcon.name, GIcon);
};

// 按需
export { GIcon };

// 内部统一注册
export default {
  title: 'GIcon',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(GIcon.name, GIcon);
  },
};
