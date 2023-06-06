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
  <div :class="`${COMPONENT}-wrapper`">
    <svg :viewBox="`0 0 ${mergedWidth} ${mergedWidth}`" :class="`${COMPONENT}-svg`">
      <circle
        :class="COMPONENT"
        fill="none"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="props.strokeWidth"
        :style="{
          stroke: props.trackColor,
        }"
      />
      <circle
        :class="`${COMPONENT}-bar`"
        fill="none"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="props.strokeWidth"
        :style="{
          stroke: props.color,
          strokeDasharray: perimeter,
          strokeDashoffset: (props.percent >= 1 ? 0 : 1 - props.percent) * perimeter,
        }"
      />
    </svg>
  </div>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: g-progress-circle;
.@{COMPONENT} {
  stroke: @gray-4;
  &-bar {
    stroke: @primary-color;
  }
}
</style>
