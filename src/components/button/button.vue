<script setup lang="ts">
const COMPONENT = 'g-button';

defineProps<{ type?: 'primary' | 'normal'; disabled?: boolean }>();
</script>

<template>
  <button :class="[COMPONENT, `${COMPONENT}-${type || (disabled ? 'disabled' : 'normal')}`]" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="less">
@import './../../style/theme/default.less';
@COMPONENT: ~'@{prefix}-button';
.@{COMPONENT} {
  padding: 2px 10px;
  border-radius: @border-radius-medium;
  &-normal {
    border: @border-normal;
  }
  &[disabled] {
    color: @primary-color;
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
  &-primary {
    color: #fff;
    background-color: @primary-color;
    border-color: #1890ff;
    &:hover {
      background-color: @primary-dark;
    }
  }
}
</style>
