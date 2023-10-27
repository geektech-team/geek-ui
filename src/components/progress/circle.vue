<script setup lang="ts">
import { computed } from 'vue';
import { circleProps } from './circle.props';

const COMPONENT = 'g-progress-circle';
const props = defineProps(circleProps);
const mergedWidth = computed(() => {
  return Number(props.width ?? 64);
});
const radius = computed(() => (mergedWidth.value - props.strokeWidth) / 2); // 半径
const perimeter = computed(() => Math.PI * 2 * radius.value); // 周长
const center = computed(() => mergedWidth.value / 2);
</script>

<template>
  <div :class="`${COMPONENT}`">
    <svg :viewBox="`0 0 ${mergedWidth} ${mergedWidth}`" :class="`${COMPONENT}-svg`">
      <circle
        :class="`${COMPONENT}-svg-background`"
        fill="none"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="strokeWidth"
        :stroke="trackColor"
      />
      <circle
        :class="`${COMPONENT}-svg-bar`"
        fill="none"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        :stroke="color ?? 'var(--primary-color)'"
        :stroke-dasharray="perimeter"
        :stroke-dashoffset="(percent >= 1 ? 0 : 1 - percent) * perimeter"
      />
    </svg>
    <div :class="`${COMPONENT}-text`">
      <slot name="text">
        {{ percent * 100 }}%
      </slot>
    </div>
  </div>
</template>

<style lang="less">
@COMPONENT: g-progress-circle;
.@{COMPONENT} {
  stroke: @gray-4;
  position: relative;
  &-svg {
    transform: rotate(-90deg);
  }
  &-svg-bar {
    transition: stroke-dashoffset 0.6s @transition-timing-function-decelerate;
  }
  &-text {
    position: absolute;
    font-size: 30px;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    text-shadow: 1px 1px 4px @dark-gray-6;
  }
}
</style>
