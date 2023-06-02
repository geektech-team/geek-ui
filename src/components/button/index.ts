import type { App } from 'vue';
import GButton from './button.vue';

// 作为插件引入
GButton.name = 'GButton';
GButton.install = function (app: App): void {
  app.component(GButton.name, GButton);
};

// 按需
export { GButton };
