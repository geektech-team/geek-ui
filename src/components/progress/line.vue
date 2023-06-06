<script setup lang="ts">
import { lineProps } from './line.props';
const props = defineProps(lineProps);

const COMPONENT = 'g-progress-line';
</script>

<template>
  <div :class="`${COMPONENT}-wrapper`">
    <div :class="COMPONENT">
      <div
        :class="`${COMPONENT}-bar`"
        :style="{
          width: `${props.percent * 100}%`,
          height: `${props.strokeWidth || 8}px`,
          backgroundColor: props.trackColor,
        }"
      />
    </div>
  </div>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: g-progress-line;
.@{COMPONENT} {
  background-color: @gray-4;
  border-radius: 100px;
  width: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  &-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    height: 100%;
  }
  &-bar {
    height: 100%;
    border-radius: 100px;
    background-color: @primary-color;
    position: relative;
    transition: width 0.6s @transition-timing-function-standard, background 0.3s @transition-timing-function-standard;
    max-width: 100%;
  }
}
</style>
