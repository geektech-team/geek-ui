<script setup lang="ts">
import { ref } from 'vue';
import GIcon from '../icon/icon.vue';

const COMPONENT = 'g-tag';

const emit = defineEmits(['close']);

defineProps<{
  bordered?: boolean;
  disabled?: boolean;
  closable?: boolean;
}>();
const visible = ref(true);

const handleClose = (ev: Event) => {
  visible.value = false;
  emit('close', ev);
};
</script>

<template>
  <span v-if="visible" :class="COMPONENT" :disabled="disabled">
    <slot />
    <g-icon v-if="closable" name="close" @click="handleClose" />
  </span>
</template>

<style lang="less">
@import './../../style/index.less';
@COMPONENT: ~'@{prefix}-tag';
.@{COMPONENT} {
  padding: 0 5px;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  border-color: transparent;
  background-color: @gray-2;
  &-disabled {
    color: @primary-color;
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
  .g-icon-close {
    margin-left: 4px;
  }
}
</style>
