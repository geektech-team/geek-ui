<script setup lang="ts">
import { GIcon } from '../icon';
const COMPONENT = 'g-loading';

interface Props {
  loading?: boolean;
}
withDefaults(defineProps<Props>(), {
  loading: false,
});
</script>

<template>
  <div :class="COMPONENT">
    <div v-show="loading" :class="`${COMPONENT}-mask`">
      <g-icon :class="`${COMPONENT}-icon`" name="loading" />
    </div>
    <slot />
  </div>
</template>

<style lang="less">
@COMPONENT: ~'@{prefix}-loading';
.@{COMPONENT} {
  position: relative;
  &-mask {
    cursor: wait;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: var(--z-index-mask);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--mask-color-light-bg);
  }
  &-icon {
    animation: rotate 1s linear infinite;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
