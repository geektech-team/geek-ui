import type { App } from 'vue';
import GModal from './modal.vue';

// 作为插件引入
GModal.name = 'GModal';
GModal.install = function (app: App): void {
  app.component(GModal.name, GModal);
};

// 按需
export { GModal };
