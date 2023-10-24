<script setup lang="ts">
import { GIcon } from '../icon';
const COMPONENT = 'g-loading';
</script>

<template>
  <div :class="COMPONENT">
    <g-icon :class="`${COMPONENT}-icon`" name="loading" />
  </div>
</template>

<style lang="less">
@COMPONENT: ~'@{prefix}-loading';
.@{COMPONENT} {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #80808026;
  cursor: wait;
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
