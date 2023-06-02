import type { App } from 'vue';
import GTag from './tag.vue';

// 作为插件引入
GTag.name = 'GTag';
GTag.install = function (app: App): void {
  app.component(GTag.name, GTag);
};

// 按需
export { GTag };
