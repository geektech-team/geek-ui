import type { App } from 'vue';
import GScrollbarBox from './scrollbar-box.vue';

// 作为插件引入
GScrollbarBox.name = 'GScrollbarBox';
GScrollbarBox.install = function (app: App): void {
  app.component(GScrollbarBox.name, GScrollbarBox);
};

// 按需
export { GScrollbarBox };
