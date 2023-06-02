import type { App } from 'vue';
import GIcon from './icon.vue';

// 作为插件引入
GIcon.name = 'GIcon';
GIcon.install = function (app: App): void {
  app.component(GIcon.name, GIcon);
};

// 按需
export { GIcon };
