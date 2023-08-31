import type { App } from 'vue';
import GCarousel from './carousel.vue';
import GCarouselItem from './carousel-item.vue';

// 作为插件引入
GCarousel.name = 'GCarousel';
GCarouselItem.name = 'GCarouselItem';
GCarousel.install = function (app: App): void {
  app.component(GCarousel.name, GCarousel);
};
GCarouselItem.install = function (app: App): void {
  app.component(GCarouselItem.name, GCarouselItem);
};

// 按需
export { GCarousel, GCarouselItem };
