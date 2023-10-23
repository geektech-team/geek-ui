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
const beginCircle = computed(() => {
  return {
    cx: radius.value * 2 + props.strokeWidth / 2,
    cy: radius.value + props.strokeWidth / 2,
    r: props.strokeWidth / 2,
  };
});
const endCircle = computed(() => {
  return {
    cx: radius.value + radius.value * Math.cos(props.percent * 2 * Math.PI) + props.strokeWidth / 2,
    cy: radius.value + radius.value * Math.sin(props.percent * 2 * Math.PI) + props.strokeWidth / 2,
    r: props.strokeWidth / 2,
  };
});
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
        :style="{
          stroke: trackColor,
        }"
      />
      <circle
        :class="`${COMPONENT}-svg-bar`"
        fill="none"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="strokeWidth"
        :style="{
          stroke: color ?? 'var(--primary-color)',
          strokeDasharray: perimeter,
          strokeDashoffset: (percent >= 1 ? 0 : 1 - percent) * perimeter,
        }"
      />
      <circle
        :class="`${COMPONENT}-svg-point`"
        :cx="beginCircle.cx"
        :cy="beginCircle.cy"
        :r="beginCircle.r"
        stroke="none"
        :fill="color ?? 'var(--primary-color)'"
      />
      <circle
        :class="`${COMPONENT}-svg-point`"
        :cx="endCircle.cx"
        :cy="endCircle.cy"
        :r="endCircle.r"
        stroke="none"
        :fill="color ?? 'var(--primary-color)'"
      />
    </svg>
  </div>
</template>

<style lang="less">
@COMPONENT: g-progress-circle;
.@{COMPONENT} {
  stroke: @gray-4;
  transform: rotate(-90deg);
}
</style>
