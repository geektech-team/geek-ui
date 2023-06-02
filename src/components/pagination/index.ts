import type { App } from 'vue';
import GPagination from './pagination.vue';

// 作为插件引入
GPagination.name = 'GPagination';
GPagination.install = function (app: App): void {
  app.component(GPagination.name, GPagination);
};

// 按需
export { GPagination };
