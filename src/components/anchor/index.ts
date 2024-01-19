import type { App } from 'vue';
import GAnchor from './anchor.vue';
import GAnchorLink from './anchor-link.vue';

// 作为插件引入
GAnchor.name = 'GAnchor';
GAnchorLink.name = 'GAnchorLink';
GAnchor.install = function (app: App): void {
  app.component(GAnchor.name, GAnchor);
};
GAnchorLink.install = function (app: App): void {
  app.component(GAnchorLink.name, GAnchorLink);
};

// 按需
export { GAnchor, GAnchorLink };
