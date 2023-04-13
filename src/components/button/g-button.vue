<script setup lang="ts">
import { defineProps } from 'vue';

const COMPONENT = 'g-button';

defineProps<{ type: string }>();
</script>

<template>
  <button :class="[COMPONENT, `${COMPONENT}-${type || 'normal'}`]">
    <slot />
  </button>
</template>

<style lang="less">
@import "./../../style/theme/default.less";
@COMPONENT: ~'@{prefix}-button';
.@{COMPONENT} {
  padding: 0 5px;
  border-radius: 5px;
  &-disabled {
    color: @primary-color;
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
  &-primary {
    color: #fff;
    background-color: @primary-color;
    border-color: #1890ff;
  }
}
</style>
