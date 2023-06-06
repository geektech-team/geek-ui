import type { App } from 'vue';
import GProgress from './progress.vue';

GProgress.name = 'GProgress';
GProgress.install = function (app: App): void {
  app.component(GProgress.name, GProgress);
};

// 按需
export { GProgress };
