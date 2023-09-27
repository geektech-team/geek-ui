<script setup lang="ts">
import { onMounted } from 'vue';
import { IndicatorPosition } from './carousel.type';

const COMPONENT = 'g-carousel-indicator';

interface Props {
  count?: number;
  activeIndex?: number;
  position?: IndicatorPosition;
}
const props = withDefaults(defineProps<Props>(), {
  count: 2,
  activeIndex: 0,
  position: IndicatorPosition.Bottom,
});
const emit = defineEmits(['select']);
const onSelect = (index: number) => {
  if (index !== props.activeIndex) {
    emit('select', index);
  }
};
</script>

<template>
  <div :class="[COMPONENT, `${COMPONENT}-${props.position}`]">
    <span
      v-for="(n, index) in count"
      :key="index"
      :class="[
        `${COMPONENT}-item`,
        {
          [`${COMPONENT}-item-active`]: index === activeIndex,
        },
      ]"
      @click="onSelect(index)"
    />
  </div>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: g-carousel-indicator;
@carousel-indicator-position: 15px;
.@{COMPONENT} {
  position: absolute;
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 2;
  &-bottom {
    bottom: @carousel-indicator-position;
    left: 50%;
    transform: translateX(-50%);
  }

  &-top {
    top: @carousel-indicator-position;
    left: 50%;
    transform: translateX(-50%);
  }

  &-left {
    top: 50%;
    left: @carousel-indicator-position;
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &-right {
    top: 50%;
    right: @carousel-indicator-position;
    transform: translate(50%, -50%) rotate(90deg);
  }
  &-item {
    display: inline-block;
    background-color: @color-bg-white;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    cursor: pointer;
    &-active,
    &:hover {
      background-color: var(--primary-color);
    }
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  &-item-active,
  &-item:hover {
    background-color: var(--primary-color);
  }
}
</style>
