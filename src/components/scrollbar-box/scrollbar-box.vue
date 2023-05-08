<script setup lang="ts">
import { onMounted } from 'vue';

const COMPONENT = 'g-scrollbar-box';
defineProps<{ height?: number; width?: number }>();

onMounted(() => {});
</script>

<template>
  <div
    :class="COMPONENT"
    :style="{
      height: height ? `${height}px` : '',
      width: width ? `${width}px` : '',
    }"
  >
    <slot />
  </div>
</template>

<style lang="less">
@import './../../style/theme/default.less';
@COMPONENT: ~'@{prefix}-scrollbar-box';
.@{COMPONENT} {
  overflow: auto;
  height: 100%;
  width: 100%;
  /* 定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸 */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  /* 定义滚动条轨道 内阴影+圆角 */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* 定义滑块 内阴影+圆角 */
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 6px;
    background-color: rgba(125, 125, 125, 0.5);
  }
}
</style>
