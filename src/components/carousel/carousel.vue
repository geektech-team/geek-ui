<script setup lang="ts">
import { ref, computed, reactive, provide, onBeforeUnmount, watchEffect } from 'vue';
import GCarouselArrow from './carousel-arrow.vue';
import GCarouselIndicator from './carousel-indicator.vue';
import { carouselInjectionKey } from './context';
import { Direction, AnimationName, ArrowInMode, IndicatorPosition } from './carousel.type';
const COMPONENT = 'g-carousel';
interface Props {
  current?: number; // 当前展示索引
  autoPlay?: boolean; // 自动播放
  autoPlayInterval?: number;
  animationInterval?: number; // 时间间隔
  animationName: AnimationName;
  direction?: Direction;
  arrowInMode?: ArrowInMode;
  indicator?: boolean;
  indicatorPosition?: IndicatorPosition;
  disableOnInteraction?: boolean; // 用户操作导航或分页之后，是否禁止自动切换，默认为true：停止
  hoverToPause?: boolean; // 鼠标悬浮时暂停自动切换，鼠标离开时恢复自动切换，默认true
}
const props = withDefaults(defineProps<Props>(), {
  current: 0,
  autoPlay: false,
  autoPlayInterval: 3e3,
  animationInterval: 5e2,
  animationName: AnimationName.Slide,
  direction: Direction.Horizontal,
  arrowInMode: ArrowInMode.Hover,
  indicator: true,
  indicatorPosition: IndicatorPosition.Bottom,
  disableOnInteraction: true,
  hoverToPause: true,
});
const emit = defineEmits(['update:current', 'change']);
const carousel = ref();
const components = ref<number[]>([]);
const count = computed(() => {
  return components.value.length;
});
const currentIndex = ref(0);
const slideDirection = ref();
const isPause = ref(false);
const addComponent = (uid: number) => {
  components.value.push(uid);
};
const previousIndex = ref();
const nextIndex = computed(() => {
  let next: number;
  if (currentIndex.value === count.value - 1) {
    next = 0;
  } else {
    next = currentIndex.value + 1;
  }
  return next;
});
const carouselContext = reactive({
  components,
  currentIndex,
  previousIndex,
  nextIndex,
  slideDirection,
  animationInterval: props.animationInterval,
  addComponent,
  animationName: props.animationName,
});
provide(carouselInjectionKey, carouselContext);
const hasIndicator = computed(() => {
  return props.indicator && components.value.length > 1;
});
const hasArrow = computed(() => {
  return props.arrowInMode !== ArrowInMode.Never && components.value.length > 1;
});
let animationTimer = 0;
const slideTo = (options: { targetIndex: number; isToPrevious?: boolean; isManual?: boolean }) => {
  const { targetIndex, isToPrevious = false, isManual = false } = options;
  if (!animationTimer && targetIndex !== currentIndex.value) {
    previousIndex.value = currentIndex.value;
    currentIndex.value = targetIndex;
    slideDirection.value = isToPrevious ? 'to-prev' : 'to-next';
    animationTimer = window.setTimeout(() => {
      animationTimer = 0;
    }, props.animationInterval);
    emit('update:current', currentIndex.value);
    emit('change', currentIndex.value, previousIndex.value, isManual);
  }
};
const getPreviousIndex = () => {
  let previous: number;
  if (currentIndex.value === 0) {
    previous = count.value - 1;
  } else {
    previous = currentIndex.value - 1;
  }
  return previous;
};
const onPreviousClick = () =>
  slideTo({
    targetIndex: getPreviousIndex(),
    isToPrevious: true,
    isManual: true,
  });
const onNextClick = () =>
  slideTo({
    targetIndex: nextIndex.value,
    isManual: true,
  });
const onSelect = (index: number) =>
  slideTo({
    targetIndex: index,
    isToPrevious: index < currentIndex.value,
    isManual: true,
  });
const onStart = () => {
  if (props.hoverToPause) {
    isPause.value = true;
  }
};
const onStop = () => {
  if (props.hoverToPause) {
    isPause.value = false;
  }
};
let intervalTimer = 0;
const clearTimer = () => {
  if (intervalTimer) {
    window.clearInterval(intervalTimer);
  }
};
watchEffect(() => {
  const shouldInterval = components.value?.length > 1 && !isPause.value && props.autoPlayInterval > 0;
  clearTimer();
  if (shouldInterval) {
    intervalTimer = window.setInterval(() => {
      slideTo({
        targetIndex: nextIndex.value,
      });
    }, props.autoPlayInterval);
  }
});
onBeforeUnmount(() => {
  clearTimer();
});
</script>
<template>
  <div ref="carousel" :class="COMPONENT" @mouseenter="onStop" @mouseleave="onStart">
    <div
      ref="carouselWrap"
      :class="[`${COMPONENT}-slide`, `${COMPONENT}-${direction}`, `${COMPONENT}-${slideDirection}`]"
      @mouseenter="onStop"
      @mouseleave="onStart"
    >
      <slot />
    </div>
    <g-carousel-arrow
      v-if="hasArrow"
      :direction="direction"
      :arrow-in-mode="arrowInMode"
      @previous-click="onPreviousClick"
      @next-click="onNextClick"
    />
    <g-carousel-indicator
      v-if="hasIndicator"
      :count="count"
      :active-index="currentIndex"
      :position="indicatorPosition"
      @select="onSelect"
    />
  </div>
</template>
<style lang="less">
@import './slide.less';
@COMPONENT: ~'@{prefix}-carousel';
.@{COMPONENT} {
  position: relative;
  .transition {
    transition: transform 0.3s ease-out;
  }
  &:hover {
    .arrow-left {
      opacity: 0.7;
      pointer-events: auto;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px @color-bg-white;
      background: black;
    }
    .arrow-right {
      opacity: 0.7;
      pointer-events: auto;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px @color-bg-white;
    }
  }
  &-slide {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    > *:not(.@{COMPONENT}-item-current) {
      display: none;
      visibility: hidden;
    }
    .item-position(@direction) {
      .@{COMPONENT}-item-slide-out {
        display: block;
        animation: ~'@{prefix}-carousel-slide-@{direction}-out';
      }
      .@{COMPONENT}-item-slide-in {
        display: block;
        animation: ~'@{prefix}-carousel-slide-@{direction}-in';
      }
      &.@{COMPONENT}-to-prev {
        .@{COMPONENT}-item-slide-out {
          animation: ~'@{prefix}-carousel-slide-@{direction}-out-reverse';
        }

        .@{COMPONENT}-item-slide-in {
          animation: ~'@{prefix}-carousel-slide-@{direction}-in-reverse';
        }
      }
    }

    &.@{COMPONENT}-horizontal {
      .item-position(x);
    }

    &.@{COMPONENT}-vertical {
      .item-position(y);
    }
  }
  .arrow-left {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
  }
  .arrow-right {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
