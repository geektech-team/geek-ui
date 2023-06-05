<script setup lang="ts" name="'g-button'">
const COMPONENT = 'g-button';

defineProps<{ type?: 'primary' | 'normal'; disabled?: boolean }>();
</script>

<template>
  <button :class="[COMPONENT, `${COMPONENT}-${type || (disabled ? 'disabled' : 'normal')}`]" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: ~'@{prefix}-button';
.@{COMPONENT} {
  height: 32px;
  padding: 0 15px;
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
