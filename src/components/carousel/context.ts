import { AnimationName } from './carousel.type';
import { InjectionKey } from 'vue';
export interface CarouseContext {
  components?: number[];
  currentIndex?: number;
  previousIndex?: number;
  nextIndex?: number;
  slideDirection?: string;
  animationName?: AnimationName;
  addComponent?: (uid: number) => void;
  transitionTimingFunction?: string;
  animationInterval?: number;
}

export const carouselInjectionKey: InjectionKey<CarouseContext> = Symbol('carousel');
