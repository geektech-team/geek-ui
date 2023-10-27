<script setup lang="ts">
import { withDefaults, defineProps } from 'vue';

const COMPONENT = 'g-progress-water';
withDefaults(defineProps<{ percent: number; width: number }>(), {
  percent: 0,
  width: 150,
});
</script>

<template>
  <div :class="COMPONENT" :style="`--percent: ${percent * 100}%; width: ${width}px; height: ${width}px`">
    <div class="water">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 600 140" class="water-waves">
        <path d="M 0 40 Q 75 20,150 40 T 300 40 T 450 40 T 600 40 L 600 140 L 0 140 L 0 70Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 600 140" class="water-waves">
        <path d="M 0 40 Q 75 20,150 40 T 300 40 T 450 40 T 600 40 L 600 140 L 0 140 L 0 70Z" />
      </svg>
    </div>
    <div :class="`${COMPONENT}-text`">
      <slot name="text">
        {{ percent * 100 }}%
      </slot>
    </div>
  </div>
</template>

<style lang="less">
@COMPONENT: g-progress-water;
:root {
  --wave1: #28bbff;
  --wave2: #2084cc;
}
.@{COMPONENT} {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: @gray-3;

  .water {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: var(--wave1);
    /* 直接对bottom操作 */
    bottom: calc(-128% + var(--percent));
    transition: bottom 1s;
  }

  .water-waves {
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 200%;
    stroke: none;
  }

  .water-waves:nth-child(1) {
    fill: var(--wave1);
    transform: translate(-50%, 0);
    z-index: 3;
    animation: wave-move1 0.6s linear infinite;
    /* svg重合有一条线 */
    margin-bottom: -2px;
  }

  .water-waves:nth-child(2) {
    fill: var(--wave2);
    transform: translate(-50%, 0);
    z-index: 1;
    animation: wave-move1 0.8s linear infinite;
  }

  @keyframes wave-move1 {
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes wave-move2 {
    100% {
      transform: translate(-50%, 0);
    }
  }
  &-text {
    position: absolute;
    font-size: 30px;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    text-shadow: 1px 1px 4px @dark-gray-6;
  }
}
</style>
