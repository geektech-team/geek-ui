import type { App } from 'vue';
import GCol from './col.vue';

// 作为插件引入
GCol.name = 'GCol';
GCol.install = function (app: App): void {
  app.component(GCol.name, GCol);
};

// 按需
export { GCol };
