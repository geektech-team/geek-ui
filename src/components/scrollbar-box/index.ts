import type { App } from 'vue';
import GScrollbarBox from './scrollbar-box.vue';

// 作为插件引入
GScrollbarBox.install = function (app: App): void {
  app.component(GScrollbarBox.name, GScrollbarBox);
};

// 按需
export { GScrollbarBox };

// 内部统一注册
export default {
  title: 'GScrollbarBox',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(GScrollbarBox.name, GScrollbarBox);
  },
};
