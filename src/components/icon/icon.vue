<script setup lang="ts">
const COMPONENT = 'g-icon';

defineProps<{ name: string }>();
</script>

<template>
  <i :class="[COMPONENT, `${COMPONENT}-${name}`]" />
</template>

<style lang="less">
@import './../../style/icon/g-icon.less';
@COMPONENT: ~'@{prefix}-icon';
.@{COMPONENT} {
  cursor: pointer;
  vertical-align: middle;
}
</style>
