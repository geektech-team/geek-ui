import type { App } from 'vue';
import GRow from './row.vue';

// 作为插件引入
GRow.name = 'GRow';
GRow.install = function (app: App): void {
  app.component(GRow.name, GRow);
};

// 按需
export { GRow };
