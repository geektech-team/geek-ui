<script setup lang="ts">
import ProgressLine from './line.vue';
import ProgressCircle from './circle.vue';
import { progressProps } from './progress.props';
const COMPONENT = 'g-progress';
const props = defineProps(progressProps);
</script>

<template>
  <div :class="COMPONENT">
    <ProgressLine
      v-if="props.type === 'line'"
      :animation="props.animation"
      :percent="props.percent"
      :color="props.color"
      :track-color="props.trackColor"
      :width="props.width"
      :stroke-width="props.strokeWidth"
    />
    <ProgressCircle
      v-else-if="props.type === 'circle'"
      :animation="props.animation"
      :percent="props.percent"
      :color="props.color"
      :track-color="props.trackColor"
      :width="props.width"
      :stroke-width="props.strokeWidth"
    />
  </div>
</template>

<style lang="less">
@COMPONENT: g-progress;
.@{COMPONENT} {
  //  display: flex;
}
</style>
