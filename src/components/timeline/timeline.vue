<script setup lang="ts">
import { onMounted } from 'vue';

const COMPONENT = 'g-timeline';

onMounted(() => {});
</script>

<template>
  <div :class="COMPONENT">
    <slot />
  </div>
</template>

<style lang="less">
@COMPONENT: g-timeline;
.@{COMPONENT} {
  //  display: flex;
}
</style>
