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
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px @color-bg-white;
  font-weight: 500;
  &-normal {
    background-color: @gray-2;
    // border: @border-normal;
    color: @primary-text;
    &:active {
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px @color-bg-white;
    }
  }
  &[disabled] {
    color: @disabled-color;
    background-color: @disabled-background-color;
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
  &-primary {
    color: #fff;
    background-color: @primary-color;
    border-color: #1890ff;
    &:active {
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px @primary-color;
    }
  }
}
.dark {
  .@{COMPONENT} {
    box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.1), -5px -5px 10px @dark-gray-1;
    &-normal {
      background-color: @dark-gray-9;
      &:active {
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px @color-bg-white;
      }
    }
    &-primary {
      &:active {
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px @primary-dark;
      }
    }
  }
}
</style>
