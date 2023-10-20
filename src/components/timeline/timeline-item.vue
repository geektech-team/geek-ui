<script setup lang="ts">
import { defineProps } from 'vue';

const COMPONENT = 'g-timeline-item';
defineProps<{ title: string; time: string; content: string }>();
</script>

<template>
  <div :class="COMPONENT">
    <div :class="`${COMPONENT}-line-wrap`">
      <div :class="`${COMPONENT}-line-wrap-dot`" />
      <div :class="`${COMPONENT}-line-wrap-line`" />
    </div>
    <div :class="`${COMPONENT}-content-wrap`">
      <div :class="`${COMPONENT}-content-wrap-header`">
        <div :class="`${COMPONENT}-content-wrap-header-time`">
          <slot name="time">
            {{ time }}
          </slot>
        </div>
        <div :class="`${COMPONENT}-content-wrap-header-title`">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
      </div>
      <slot name="content">
        <div :class="`${COMPONENT}-content-wrap-content`" v-html="content" />
      </slot>
    </div>
  </div>
</template>

<style lang="less">
@COMPONENT: g-timeline-item;
.@{COMPONENT} {
  position: relative;
  overflow: hidden;
  &-line-wrap {
    position: absolute;
    height: 100%;
    &-dot {
      position: relative;
      top: 8px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: gray;
    }
    &-line {
      position: absolute;
      width: 4px;
      top: 28px;
      left: 3px;
      bottom: 0;
      background-color: rgb(128 128 128 / 50%);
    }
  }
  &:last-child {
    .@{COMPONENT}-line-wrap-line {
      display: none;
    }
  }
  &-content-wrap {
    margin-left: 16px;
    padding-bottom: 8px;
    &-header {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      font-weight: bold;
    }
    &-content {
      margin-top: 8px;
      color: gray;
    }
  }
}
</style>
