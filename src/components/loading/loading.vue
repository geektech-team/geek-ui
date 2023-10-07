<script setup lang="ts">
import { GIcon } from '../icon';
const COMPONENT = 'g-loading';
</script>

<template>
  <g-icon :class="[COMPONENT]" name="loading" />
</template>

<style lang="less">
@COMPONENT: ~'@{prefix}-loading';
.@{COMPONENT} {
  cursor: wait;
  animation: rotate 1s linear infinite;
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
