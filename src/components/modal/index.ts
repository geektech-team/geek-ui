import type { App } from 'vue';
import GModal from './modal.vue';

// 作为插件引入
GModal.install = function (app: App): void {
  app.component(GModal.name, GModal);
};

// 按需
export { GModal };

// 内部统一注册
export default {
  title: 'GModal',
  category: '数据展示',
  status: '100%',
  install (app: App): void {
    app.component(GModal.name, GModal);
  },
};
