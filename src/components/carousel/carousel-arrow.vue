<script setup lang="ts">
import { computed, defineEmits } from 'vue';
import { GIcon } from '../icon';
import { Direction, ArrowInMode } from './carousel.type';

const COMPONENT = 'g-carousel-arrow';

interface Props {
  direction?: Direction;
  arrowInMode?: ArrowInMode;
}
const props = withDefaults(defineProps<Props>(), {
  direction: Direction.Horizontal,
  arrowInMode: ArrowInMode.Hover,
});
const emit = defineEmits(['previousClick', 'nextClick']);
const previousIconName = computed(() => (props.direction === Direction.Horizontal ? 'left' : 'top'));
const nextIconName = computed(() => (props.direction === Direction.Horizontal ? 'right' : 'bottom'));
const onPreviousClick = (ev: Event) => {
  emit('previousClick', ev);
};
const onNextClick = (ev: Event) => {
  emit('nextClick', ev);
};
const cls = computed(() => {
  return {
    [`${COMPONENT}-hover`]: props.arrowInMode === ArrowInMode.Hover,
  };
});
</script>

<template>
  <g-icon :class="[COMPONENT, cls]" :name="previousIconName" @click="onPreviousClick" />
  <g-icon :class="[COMPONENT, cls]" :name="nextIconName" @click="onNextClick" />
</template>

<style lang="less">
@carousel-arrow-position: 20px;
@COMPONENT: g-carousel-arrow;
.@{COMPONENT} {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  color: @color-white;
  background-color: @float-button-bg;
  border-radius: 50%;
  &.@{COMPONENT}-hover {
    display: none;
  }
  &:hover {
    background-color: @float-button-bg-hover;
  }
  &.g-icon-left {
    top: 50%;
    left: @carousel-arrow-position;
    transform: translateY(-50%);
  }
  &.g-icon-right {
    top: 50%;
    right: @carousel-arrow-position;
    transform: translateY(-50%);
  }
  &.g-icon-top {
    left: 50%;
    top: @carousel-arrow-position;
    transform: translateX(-50%);
  }
  &.g-icon-bottom {
    left: 50%;
    bottom: @carousel-arrow-position;
    transform: translateX(-50%);
  }
}
.g-carousel {
  &:hover {
    .@{COMPONENT}-hover {
      display: flex;
    }
  }
}
</style>
