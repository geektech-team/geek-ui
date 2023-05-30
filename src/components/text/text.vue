<script setup lang="ts">
const COMPONENT = 'g-text';
defineProps<{
  code?: boolean;
  underline?: boolean;
  del?: boolean;
  strong?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <span :class="[COMPONENT, disabled ? `${COMPONENT}-disabled` : '']">
    <code v-if="code">
      <slot />
    </code>
    <u v-else-if="underline">
      <slot />
    </u>
    <del v-else-if="del">
      <slot />
    </del>
    <strong v-else-if="strong">
      <slot />
    </strong>
    <slot v-else />
  </span>
</template>

<style lang="less">
@COMPONENT: g-text;
.@{COMPONENT} {
  &-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    user-select: none;
  }
}
</style>
