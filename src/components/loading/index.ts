import type { App } from 'vue';
import GLoading from './loading.vue';

// 作为插件引入
GLoading.name = 'GLoading';
GLoading.install = function (app: App): void {
  app.component(GLoading.name, GLoading);
};

// 按需
export { GLoading };
