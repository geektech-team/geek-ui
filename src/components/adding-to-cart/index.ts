import type { App } from 'vue';
import GAddingToCart from './adding-to-cart.vue';

// 作为插件引入
GAddingToCart.name = 'GAddingToCart';
GAddingToCart.install = function (app: App): void {
  app.component(GAddingToCart.name, GAddingToCart);
};

// 按需
export { GAddingToCart };
