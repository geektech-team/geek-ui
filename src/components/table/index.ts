import type { App } from 'vue';
import GTable from './table.vue';

// 作为插件引入
GTable.name = 'GTable';
GTable.install = function (app: App): void {
  app.component(GTable.name, GTable);
};

// 按需
export { GTable };
