import type { App } from 'vue';
import GText from './text.vue';

GText.name = 'GText';
GText.install = function (app: App): void {
  app.component(GText.name, GText);
};

// 按需
export { GText };
