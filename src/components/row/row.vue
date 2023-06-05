<script setup lang="ts">
import { onMounted } from 'vue';

const COMPONENT = 'g-row';

onMounted(() => {});
</script>

<template>
  <div :class="COMPONENT">
    <slot />
  </div>
</template>

<style lang="less">
@COMPONENT: g-row;
.@{COMPONENT} {
  display: flex;
  flex-flow: row wrap;
}
</style>
