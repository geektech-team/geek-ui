import type { App } from 'vue';
import GPagination from './pagination.vue';

// 作为插件引入
GPagination.install = function (app: App): void {
  app.component(GPagination.name, GPagination);
};

// 按需
export { GPagination };

// 内部统一注册
export default {
  title: 'GPagination 按钮',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(GPagination.name, GPagination);
  },
};
