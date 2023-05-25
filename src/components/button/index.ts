import type { App } from 'vue';
import GButton from './button.vue';

// 作为插件引入
GButton.install = function (app: App): void {
  app.component(GButton.name, GButton);
};

// 按需
export { GButton };

// 内部统一注册
export default {
  title: 'GButton 按钮',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(GButton.name, GButton);
  },
};
