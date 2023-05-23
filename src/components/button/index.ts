import type { App } from 'vue';
import Button from './button.vue';

// 作为插件引入
Button.install = function (app: App): void {
  app.component(Button.name, Button);
};

// 按需
export { Button };

// 内部统一注册
export default {
  title: 'Button 按钮',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(Button.name, Button);
  },
};
