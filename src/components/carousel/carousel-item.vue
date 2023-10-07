<script setup lang="ts">
import { computed, inject, onMounted, getCurrentInstance } from 'vue';
import { carouselInjectionKey } from './context';
import { AnimationName } from './carousel.type';

const COMPONENT = 'g-carousel-item';
const context = inject<{
  components?: number[];
  currentIndex?: number;
  previousIndex?: number;
  nextIndex?: number;
  slideDirection?: string;
  animationName?: AnimationName;
  addComponent: unknown;
  transitionTimingFunction?: string;
  animationInterval?: number;
}>(carouselInjectionKey, {});
const instance = getCurrentInstance();
const index = computed(() => {
  return context.components?.indexOf(instance?.uid ?? -1) ?? -1;
});
const isCurrent = computed(() => index.value === context.currentIndex);
const carouselDynamicClass = computed(() => {
  const { previousIndex, nextIndex, animationName } = context;
  return {
    [`${COMPONENT}-prev`]: index.value === previousIndex,
    [`${COMPONENT}-next`]: index.value === nextIndex,
    [`${COMPONENT}-current`]: isCurrent.value,
    [`${COMPONENT}-slide-in`]: animationName === AnimationName.Slide && isCurrent.value,
    [`${COMPONENT}-slide-out`]: animationName === AnimationName.Slide && index.value === previousIndex,
  };
});
const animationStyle = computed(() => {
  const { transitionTimingFunction, animationInterval } = context;
  return {
    transitionTimingFunction,
    transitionDuration: `${animationInterval}ms`,
    animationTimingFunction: 'cubic-bezier(0.34, 0.69, 0.1, 1)',
    animationDuration: `${animationInterval}ms`,
  };
});
const style = computed(() => {
  return {
    ...animationStyle.value,
  };
});
onMounted(() => {
  context.addComponent(instance?.uid);
});
</script>

<template>
  <div :class="[COMPONENT, carouselDynamicClass]" :style="style">
    <slot />
  </div>
</template>

<style lang="less">
@COMPONENT: ~'@{prefix}-carousel-item';
.@{COMPONENT} {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-current {
    z-index: 1;
  }
}
</style>
